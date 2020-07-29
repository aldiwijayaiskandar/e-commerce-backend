import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { success, serverErrorResponse, clientError } from "../handler";
import sequelize from "../../db/db";

const kecamatanController = {
  getById: async (req: Request, res: Response) => {
    try {
      console.log(process.env.DATABASE);
      const data = await sequelize.query(
        `select * from kecamatan where kabupaten_id = ${req.params.kabupaten_id} order by visible desc`,
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

export { kecamatanController };
