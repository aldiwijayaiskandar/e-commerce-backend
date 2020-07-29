import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { success, serverErrorResponse, clientError } from "../handler";
import sequelize from "../../db/db";

const itemSuggestionController = {
  sayur: async (req: Request, res: Response) => {
    try {
      let data = await sequelize.query(
        `select i.item_id as item_id,i.image as item_image,ip.price as price, i.name as item_name,i.satuan as item_kuantitas,si.name as item_satuan,
            sc.name as subcategory_name,sc2.name as subcategory2_name, c.name as category_name
            from item as i,subcategory as sc,subcategory2 as sc2,category as c,satuan_item as si,item_provinsi as ip where 
            ip.item_id = i.item_id and
            i.subcategory_id = sc.subcategory_id and
            i.subcategory_id2 = sc2.subcategory2_id and
            sc.category_id = c.category_id and
            c.category_id = 2 and
            si.satuan_id = i.satuan_id LIMIT 10;`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  buah: async (req: Request, res: Response) => {
    try {
      let data = await sequelize.query(
        `select i.item_id as item_id,i.image as item_image,ip.price as price, i.name as item_name,i.satuan as item_kuantitas,si.name as item_satuan,
            sc.name as subcategory_name,sc2.name as subcategory2_name, c.name as category_name
            from item as i,subcategory as sc,subcategory2 as sc2,category as c,satuan_item as si,item_provinsi as ip where 
            ip.item_id = i.item_id and
            i.subcategory_id = sc.subcategory_id and
            i.subcategory_id2 = sc2.subcategory2_id and
            sc.category_id = c.category_id and
            c.category_id = 4 and
            si.satuan_id = i.satuan_id LIMIT 10;`,
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

export { itemSuggestionController };
