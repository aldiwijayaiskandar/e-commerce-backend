import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { success, clientError, serverErrorResponse } from "../handler";
import sequelize from "../../db/db";

const kelurahanController = {
  getById: async (req: Request, res: Response) => {
    try {
      console.log(process.env.DATABASE);
      const data = await sequelize.query(
        `select * from kelurahan where kecamatan_id = ${req.params.kecamatan_id} order by visible desc`,
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

export { kelurahanController };
