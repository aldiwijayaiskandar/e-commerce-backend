import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { success, serverErrorResponse, clientError } from "../handler";
import sequelize from "../../db/db";

const dropzoneController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(`select * from dropzone`, {
        type: QueryTypes.SELECT,
      });
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getDetail: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(
        `select * from dropzone where dropzone_id = ${req.params.dropzone_id}`,
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

export { dropzoneController };
