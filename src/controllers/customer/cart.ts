import { Request, Response, NextFunction } from "express";
import { QueryTypes } from "sequelize";
import { success, serverErrorResponse, clientError } from "../handler";
import { CustomerAuthRequest } from "../../models";
import sequelize from "../../db/db";

const customerCartController = {
  getSelf: async (req: CustomerAuthRequest, res: Response) => {
    try {
      const { customer_id }: any = req.userData;
      console.log(customer_id);
      const data = await sequelize.query(
        `
        select i.item_id as item_id,i.image as item_image, i.name as item_name,ip.price,i.satuan as item_kuantitas, si.name as item_satuan,
            sc.name as subcategory_name,sc2.name as subcategory2_name,c.name as category_name,
            cc.qty as qty
            from item as i,subcategory as sc,subcategory2 as sc2,category as c,  customer_cart as cc,satuan_item as si,item_provinsi as ip where 
                i.item_id = ip.item_id and
                i.subcategory_id = sc.subcategory_id and
                i.subcategory_id2 = sc2.subcategory2_id and
                sc.category_id = c.category_id and
            si.satuan_id = i.satuan_id and
            i.item_id = cc.item_id and
            cc.customer_id = ${customer_id};
              `,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      console.log(e);
      serverErrorResponse(res, e);
    }
  },
  findItemInCart: async (
    req: CustomerAuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { customer_id }: any = req.userData;
      const { item_id } = req.body;
      const find = await sequelize.query(
        `select COUNT(*) as item_found from customer_cart where item_id = ${item_id} AND customer_id = ${customer_id}`,
        {
          type: QueryTypes.SELECT,
        }
      );
      const { item_found }: any = find[0];
      if (item_found == 0) {
        next();
      } else {
        clientError.bad(res);
      }
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  addToCart: async (req: CustomerAuthRequest, res: Response) => {
    try {
      const { customer_id }: any = req.userData;
      const { item_id } = req.body;
      const data = await sequelize.query(
        `
        insert into customer_cart 
        (customer_id,item_id,qty) 
        values(${customer_id},${item_id},1)
      `,
        { type: QueryTypes.INSERT }
      );
      console.log(data);
      success.create(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  editQty: async (req: CustomerAuthRequest, res: Response) => {
    try {
      const { customer_id }: any = req.userData;
      const { item_id, qty } = req.body;
      const data = await sequelize.query(
        `
        update customer_cart set qty = ${qty} where item_id = ${item_id} AND customer_id = ${customer_id}
      `,
        {
          type: QueryTypes.UPDATE,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  removeItem: async (req: CustomerAuthRequest, res: Response) => {
    try {
      const { customer_id }: any = req.userData;
      const { item_id } = req.body;
      const data = await sequelize.query(
        `
          delete from customer_cart where customer_id =${customer_id} AND item_id = ${item_id}`,
        { type: QueryTypes.DELETE }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  clearCart: async (req: CustomerAuthRequest, res: Response) => {
    try {
      const { customer_id }: any = req.userData;
      const data = await sequelize.query(
        `
          delete from customer_cart where customer_id = ${customer_id}`,
        {
          type: QueryTypes.DELETE,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
};

export { customerCartController };
