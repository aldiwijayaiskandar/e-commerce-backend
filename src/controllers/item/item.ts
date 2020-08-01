import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import BusBoy from "busboy";
import { uploadToS3 } from "../AWS";
import { RequestWithFiles, SequelizeModel } from "../../models";
import { success, serverErrorResponse, clientError } from "../handler";
import sequelize from "../../db/db";

const itemController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(
        `select i.item_id as item_id,i.image as item_image,ip.price as price, i.name as item_name,i.satuan as item_kuantitas,si.name as item_satuan,
            sc.name as subcategory_name,sc2.name as subcategory2_name, c.name as category_name
            from item as i,subcategory as sc,subcategory2 as sc2,category as c,satuan_item as si,item_provinsi as ip where 
            ip.item_id = i.item_id and
            i.subcategory_id = sc.subcategory_id and
            i.subcategory_id2 = sc2.subcategory2_id and
            sc.category_id = c.category_id and
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
  search: async (req: Request, res: Response) => {
    try {
      const category_id = req.query.category_id as String;
      console.log(category_id);
      const search = req.query.search as String;
      console.log(search);
      var any = `ANY(select category_id from category)`;
      var sql = `select i.item_id as item_id,i.image as item_image, i.name as item_name,ip.price,i.satuan as item_kuantitas,si.name as item_satuan,
                        sc.name as subcategory_name,sc2.name as subcategory2_name, c.name as category_name
                        from item as i,subcategory as sc,subcategory2 as sc2,category as c,satuan_item as si,item_provinsi as ip where
                          ip.item_id = i.item_id and
                          i.subcategory_id = sc.subcategory_id and
                          i.subcategory_id2 = sc2.subcategory2_id and
                          sc.category_id = c.category_id and
                          si.satuan_id = i.satuan_id and
                          sc.category_id =  ${
                            req.query.category_id != "null"
                              ? req.query.category_id
                              : any
                          } and
                          LOWER(i.name) LIKE '%${
                            search.toLowerCase() != "null"
                              ? search.toLowerCase()
                              : ""
                          }%';`;
      let data = await sequelize.query(sql, {
        type: QueryTypes.SELECT,
      });
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  adminGetAll: async (req: Request, res: Response) => {
    try {
      const data = await sequelize.query(
        `select i.item_id as item_id,i.name as item_name,i.satuan as item_kuantitas, si.name as item_satuan,
         sc.name as subcategory_name,sc2.name as subcategory2_name,c.name as category_name
          from item as i,subcategory as sc,subcategory2 as sc2,category as c,  satuan_item as si,item_provinsi as ip where 
          i.item_id = ip.item_id and
          i.subcategory_id = sc.subcategory_id and
          i.subcategory_id2 = sc2.subcategory2_id and
          sc.category_id = c.category_id and
          si.satuan_id = i.satuan_id order by(i.item_id) asc`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  add: async (req: RequestWithFiles, res: Response) => {
    try {
      const { Item, ItemProvinsi } = SequelizeModel;
      const busboy = new BusBoy({ headers: req.headers });
      busboy.on("finish", async function () {
        const timeStamp = new Date().getTime() + Math.random();
        const body = {
          name: req.body.name,
          image: timeStamp.toString(),
          satuan: req.body.satuan,
          subcategory_id: req.body.subcategory_id,
          subcategory_id2: req.body.subcategory_id2,
          satuan_id: req.body.satuan_id,
        };
        const item_provinsi = JSON.parse(req.body.item_provinsi);
        const item = await Item.create(body);

        for (let i = 0; i < item_provinsi.length; i++) {
          item_provinsi[i].item_id = item.item_id;
        }

        const itemProvinsi = await ItemProvinsi.bulkCreate(item_provinsi);

        const file = req.files.image;
        uploadToS3(body.image, file.data);
        success.create(res, {});
      });
      req.pipe(busboy);
    } catch (e) {
      console.log(e);
      serverErrorResponse(res, e);
    }
  },
};

export { itemController };
