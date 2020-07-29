import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { success, serverErrorResponse } from "../handler";
import sequelize from "../../db/db";

const provinsiController = {
  getAll: async (req: Request, res: Response) => {
    try {
      console.log(process.env.DATABASE);
      const data = await sequelize.query(
        `select * from provinsi order by visible desc`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
};

export { provinsiController };
