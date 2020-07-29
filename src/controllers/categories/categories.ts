import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { success } from "../handler";
import sequelize from "../../db/db";
import ServerError from "../handler/ServerError";

const categoryController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(`select * from category`, {
        type: QueryTypes.SELECT,
      });

      success.get(res, data);
    } catch (e) {
      ServerError(res, e);
    }
  },
  getAllVisible: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(
        `select * from category where show = true order by(category.order) asc`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      ServerError(res, e);
    }
  },
};

export { categoryController };
