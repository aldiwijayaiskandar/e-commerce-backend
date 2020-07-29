import { Request, Response } from "express";
import crypto from "crypto";
import createAdminToken from "../jwt/adminCreate";
import { QueryTypes } from "sequelize";
import { SequelizeModel } from "../../models/Sequelize";
import { success, serverErrorResponse } from "../handler";
import sequelize from "../../db/db";
import ServerError from "../handler/ServerError";

const { Admin } = SequelizeModel;

const adminCredentialController = {
  login: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      let encryptPass = crypto.createHash("md5").update(password).digest("hex");
      const find = await Admin.count({
        where: {
          username: username,
        },
      });
      if (find) {
        let admin_id = await Admin.findOne({
          attributes: ["admin_id"],
          where: {
            username: username,
            password: encryptPass,
          },
        });
        const token = createAdminToken(admin_id.admin_id, username);
        res.status(200).json({
          message: "Auth Successful",
          token: token,
        });
      }
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
};

export { adminCredentialController };
