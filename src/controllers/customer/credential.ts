import { Request, Response, NextFunction } from "express";
import { QueryTypes } from "sequelize";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import createCustomerToken from "../jwt/customerCreate";
import { SequelizeModel } from "../../models/Sequelize";
import { CustomerAuthRequest } from "../../models";
import { success, serverErrorResponse, clientError } from "../handler";
import sequelize from "../../db/db";

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
        where: { email: email },
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
};

export { credentialController };
