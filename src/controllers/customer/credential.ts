import { Request, Response, NextFunction } from "express";
import { QueryTypes } from "sequelize";
import crypto from "crypto";
const { OAuth2Client } = require("google-auth-library");
import { google } from "googleapis";
import createCustomerToken from "../jwt/customerCreate";
import { SequelizeModel } from "../../models/Sequelize";
import { CustomerAuthRequest } from "../../models";
import { success, serverErrorResponse, clientError } from "../handler";
import sequelize from "../../db/db";

const client = new OAuth2Client(
  "739476099878-ubasuv8a4mlfgjn8opegtpblj6qegne8.apps.googleusercontent.com"
);

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2();

async function verivy(token: any) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
    });
    return ticket;
  } catch (e) {
    throw e;
  }
}

const credentialController = {
  getProfile: async (req: CustomerAuthRequest, res: Response) => {
    try {
      const { customer_id }: any = req.userData;
      const data = await sequelize.query(
        `select name from customer where customer_id = ${customer_id}`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data[0]);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  searchEmail: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email: String = req.body.email;
      let found = await SequelizeModel.Customer.count({
        where: { email: email, google: false },
      });
      if (found) {
        clientError.beenUsed(res, "Email have been used");
      } else {
        next();
      }
    } catch (e) {
      console.log(e);
      serverErrorResponse(res, e);
    }
  },
  searchPhoneNum: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const phone_number: String = req.body.phone_number;
      let found = await SequelizeModel.Customer.count({
        where: { phone_number: phone_number },
      });

      if (found) {
        clientError.beenUsed(res, "Phone Number have been used");
      } else {
        next();
      }
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  createAcc: async (req: Request, res: Response) => {
    try {
      const { name, email, password, phone_number, gender_id } = req.body;
      const encryptPass = crypto
        .createHash("md5")
        .update(password)
        .digest("hex");

      let create = await SequelizeModel.Customer.create({
        name: name,
        email: email.toLowerCase(),
        password: encryptPass,
        phone_number: phone_number,
        gender_id: gender_id,
        created_at: new Date(),
      });

      let { customer_id } = create;
      let createdEmail = create.email;

      const token = createCustomerToken(customer_id, createdEmail);

      res.status(200).json({
        message: "Auth Successful",
        token: token,
        phone_num: phone_number,
      });
    } catch (e) {
      console.log(e);
      serverErrorResponse(res, e);
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const encryptPass = crypto
        .createHash("md5")
        .update(password)
        .digest("hex");
      let userFind = await SequelizeModel.Customer.count({
        where: { email: email.toLowerCase(), password: encryptPass },
      });
      if (userFind) {
        let customer_id = await SequelizeModel.Customer.findOne({
          attributes: ["customer_id", "phone_number"],
          where: { email: email.toLowerCase(), password: encryptPass },
        });
        if (customer_id.customer_id) {
          const token = createCustomerToken(
            customer_id.customer_id,
            email.toLowerCase()
          );
          console.log({
            message: "Auth successful",
            token: token,
            phone_num: customer_id.phone_number,
          });
          res.status(200).json({
            message: "Auth successful",
            token: token,
            phone_num: customer_id.phone_number,
          });
        } else {
          res.status(401).json({
            message: "Auth failed",
          });
        }
      } else {
        res.status(401).json({ message: "Auth failed" });
      }
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  googleTokenVerivy: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const ticket = await verivy(req.body.access_token);
      req.body.googleTicket = ticket.payload;
      next();
    } catch (e) {
      console.log("google token verivy error:", e);
      serverErrorResponse(res, e);
    }
  },
  searchGoogleEmail: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { googleTicket } = req.body;
      const { email }: any = googleTicket;

      const count = await SequelizeModel.Customer.count({
        where: {
          email: email,
          google: true,
        },
      });
      if (count) {
        next();
      } else {
        res.status(200).json({
          googleStatus: false,
        });
      }
    } catch (e) {
      console.log("search google email error:", e);
      serverErrorResponse(res, e);
    }
  },
  googleLogin: async (req: Request, res: Response) => {
    try {
      const data = await SequelizeModel.Customer.findOne({
        attributes: ["customer_id", "phone_number"],
        where: {
          email: req.body.googleTicket.email,
          google: true,
        },
      });

      console.log(data);

      const token = createCustomerToken(
        data.customer_id,
        req.body.googleTicket.email
      );

      res.status(201).json({
        message: "Auth Successful",
        token: token,
        phone_num: data.phone_number,
      });
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  googleCreateAccount: async (req: Request, res: Response) => {
    try {
      const { phone_number, googleTicket } = req.body;

      oauth2Client.setCredentials({ access_token: req.body.token });
      var oauth2 = google.oauth2({
        auth: oauth2Client,
        version: "v2",
      });

      const data = await oauth2.userinfo.get();
      const { name, email, picture, gender } = data.data;
      const ticket = await client.getTokenInfo(req.body.token);

      let customerGender = 3;
      if (gender) {
        if (gender == "Male") {
          customerGender = 1;
        } else if (gender == "Female") {
          customerGender = 2;
        }
      }
      let create = await SequelizeModel.Customer.create({
        name: name,
        email: email?.toLowerCase(),
        phone_number: phone_number,
        gender_id: customerGender,
        created_at: new Date(),
        profile_picture: picture,
        google: true,
      });
      let { customer_id } = create;
      let createdEmail = create.email;

      const token = createCustomerToken(customer_id, createdEmail);

      res.status(201).json({
        message: "Auth Successful",
        token: token,
        phone_num: phone_number,
      });
    } catch (e) {
      console.log(e);
      serverErrorResponse(res, e);
    }
  },
};

export { credentialController };
