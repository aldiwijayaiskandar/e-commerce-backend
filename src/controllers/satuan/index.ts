import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { success, serverErrorResponse } from "../handler";
import sequelize from "../../db/db";

const satuanController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(`select * from satuan_item`, {
        type: QueryTypes.SELECT,
      });
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
};

export { satuanController };
