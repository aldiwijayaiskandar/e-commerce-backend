import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { success, serverErrorResponse } from "../handler";
import { CustomerAuthRequest } from "../../models";
import sequelize from "../../db/db";

const customerAddressController = {
  getAll: async (req: CustomerAuthRequest, res: Response) => {
    try {
      const { customer_id }: any = req.userData;
      const data = await sequelize.query(
        `select ca.address_id,ca.name,ca.alamat,ca.kode_pos, p.name as provinsi,ka.name as kabupaten,k.name as kecamatan
                      from customer_address as ca,kelurahan as ke,kecamatan as k, kabupaten as ka, provinsi as p
                      where ke.kelurahan_id = ca.kelurahan_id and
                      ke.kecamatan_id = k.kecamatan_id and
                      ka.kabupaten_id = k.kabupaten_id and
                      p.provinsi_id = ka.provinsi_id and
                      ca.customer_id = ${customer_id};`,
        {
          type: QueryTypes.SELECT,
        }
      );
      console.log(data);
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getDetail: async (req: CustomerAuthRequest, res: Response) => {
    try {
    } catch (e) {}
  },
  add: async (req: CustomerAuthRequest, res: Response) => {
    try {
      const { customer_id }: any = req?.userData;
      const data = await sequelize.query(
        `insert into customer_address values (${customer_id},'${req.body.alamat}','${req.body.kode_pos}',DEFAULT,'${req.body.name}',${req.body.kelurahan_id})`
      );
      success.create(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  edit: async (req: CustomerAuthRequest, res: Response) => {
    try {
    } catch (e) {}
  },
  delete: async (req: CustomerAuthRequest, res: Response) => {
    try {
    } catch (e) {}
  },
};

export { customerAddressController };
