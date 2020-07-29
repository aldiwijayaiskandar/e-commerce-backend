import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { success, serverErrorResponse, clientError } from "../handler";
import sequelize from "../../db/db";

const kabupatenController = {
  getById: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(
        `select * from kabupaten where provinsi_id = ${req.params.provinsi_id} order by visible desc`,
        {
          type: QueryTypes.SELECT,
        }
      );
      if (data.length) {
        success.get(res, data);
      } else {
        clientError.notFound(res);
      }
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
};

export { kabupatenController };
