import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { success } from "../handler";
import sequelize from "../../db/db";
import ServerError from "../handler/ServerError";

const subcategoryController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(`select * from subcategory`, {
        type: QueryTypes.SELECT,
      });
      success.get(res, data);
    } catch (e) {
      ServerError(res, e);
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(
        `select * from subcategory where category_id = ${req.params.category_id}`,
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

export { subcategoryController };
