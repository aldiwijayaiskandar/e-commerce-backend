import { Request, Response, NextFunction } from "express";
import { QueryTypes } from "sequelize";
import { success, serverErrorResponse, clientError } from "../handler";
import { SequelizeModel } from "../../models/Sequelize";
import { CustomerAuthRequest } from "../../models";
import sequelize from "../../db/db";

const { Customer } = SequelizeModel;

const customerAdminController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await Customer.findAll({
        attributes: [
          "customer_id",
          "name",
          "email",
          "phone_number",
          "created_at",
          "gender_id",
        ],
      });
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getCount: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(
        `select COUNT(*) as count from customer;`,
        {
          type: QueryTypes.SELECT,
        }
      );
      const count: any = data[0];
      success.get(res, count.count);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  graph: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(
        `select 
          sum(case when extract('month' from created_at) = 1 then 1 else 0 end ) as Jan,
          sum(case when extract('month' from created_at) = 2 then 1 else 0 end ) as Feb,
          sum(case when extract('month' from created_at) = 3 then 1 else 0 end ) as Mar,
          sum(case when extract('month' from created_at) = 4 then 1 else 0 end ) as Apr,
          sum(case when extract('month' from created_at) = 5 then 1 else 0 end ) as Mei,
          sum(case when extract('month' from created_at) = 6 then 1 else 0 end ) as Jun,
          sum(case when extract('month' from created_at) = 7 then 1 else 0 end ) as Jul,
          sum(case when extract('month' from created_at) = 8 then 1 else 0 end ) as Aug,
          sum(case when extract('month' from created_at) = 9 then 1 else 0 end ) as Sep,
          sum(case when extract('month' from created_at) = 10 then 1 else 0 end ) as Oct,
          sum(case when extract('month' from created_at) = 11 then 1 else 0 end ) as Nov,
          sum(case when extract('month' from created_at) = 12 then 1 else 0 end ) as Des
          from customer;`,
        { type: QueryTypes.SELECT }
      );
      success.get(res, data[0]);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
};

export { customerAdminController };
