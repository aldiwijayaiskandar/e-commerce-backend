import { Request, Response, NextFunction } from "express";
import { QueryTypes } from "sequelize";
import { addDays, format } from "date-fns";
import { CustomerAuthRequest } from "../../models";
import { SequelizeModel } from "../../models/Sequelize";
import { success, serverErrorResponse, clientError } from "../handler";
import sequelize from "../../db/db";
import { getBank, getVA, createVa } from "../xendit/virtualAcc";

const transactionController = {
  getOngoingCustomerTransaction: async (
    req: CustomerAuthRequest,
    res: Response
  ) => {
    try {
      const data = await sequelize.query(
        `select transaction_id,amount,alamat,order_time,payment_time,arrived_time,schedule_time,xendit_id,rekening_pribadi,no_rek
        from transaction,customer_address as ca where 
        arrived_time is null and 
        ca.customer_id = ${req.userData?.customer_id} and 
        ca.address_id = transaction.address_id order by order_time desc;`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getCompletedCustomerTransaction: async (
    req: CustomerAuthRequest,
    res: Response
  ) => {
    try {
      const data = await sequelize.query(
        `select transaction_id,amount,alamat,order_time,payment_time,arrived_time,schedule_time,xendit_id,rekening_pribadi,no_rek
        from transaction,customer_address as ca where 
        arrived_time is not null and 
        ca.customer_id = ${req.userData?.customer_id} and 
        ca.address_id = transaction.address_id order by order_time desc;`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getCustomerTransactionDetail: async (
    req: CustomerAuthRequest,
    res: Response
  ) => {
    try {
      const transactionData = await sequelize.query(
        `
        select transaction_id,amount,order_time,payment_time,arrived_time,schedule_time,delivery_fee,customer_address.alamat 
        from transaction,customer_address where
        transaction.address_id = customer_address.address_id and
        transaction_id = ${req.params.transaction_id};`,
        {
          type: QueryTypes.SELECT,
        }
      );
      const transactionItem = await sequelize.query(
        `
        select i.item_id,ti.qty,ti.price,ti.qty*ti.price as total_price,i.name,image,satuan as itemQty,si.name as satuan
        from transaction_item as ti,item as i,satuan_item as si where 
        ti.item_id  = i.item_id and 
        si.satuan_id = i.satuan_id and
        transaction_id = ${req.params.transaction_id};`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, {
        transaction: transactionData[0],
        item: transactionItem,
      });
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getVABank: async (req: Request, res: Response) => {
    try {
      console.log("get VA");
      const data = await getBank();
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getXenditVA: async (req: Request, res: Response) => {
    try {
      const data = await getVA(req.params.id);
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  xenditTransaction: async (req: CustomerAuthRequest, res: Response) => {
    try {
      const {
        address_id,
        cart_items,
        amount,
        bank_code,
        delivery_fee,
      } = req.body;

      const userData = await sequelize.query(
        `select phone_number, name from customer where customer_id = ${req.userData?.customer_id}`,
        {
          type: QueryTypes.SELECT,
        }
      );

      const { phone_number, name }: any = userData[0];

      const va = await createVa(phone_number, name, bank_code, amount);

      const time = new Date().toUTCString();

      const newT: any = await SequelizeModel.Transaction.create({
        address_id: address_id,
        order_time: new Date().toUTCString(),
        amount: amount,
        xendit_id: va.id,
        delivery_fee: delivery_fee,
        rekening_pribadi: false,
      });

      for (let i = 0; i < cart_items.length; i++) {
        cart_items[i].transaction_id = newT.transaction_id;
        await sequelize.query(
          `insert into transaction_item values(${newT.transaction_id},${cart_items[i].item_id},${cart_items[i].qty},${cart_items[i].price})`,
          {
            type: QueryTypes.INSERT,
          }
        );
      }

      const data = await sequelize.query(
        `select * from transaction where transaction_id = ${newT.transaction_id}`,
        { type: QueryTypes.SELECT }
      );

      if (va.status == "404") {
        res.status(404).json(va);
      } else {
        res.status(201).json({
          status: "SUCCESS",
          data: data[0],
        });
      }
    } catch (e) {
      console.log(e);
      serverErrorResponse(res, e);
    }
  },
  rekeningPribadiTransactioN: async (
    req: CustomerAuthRequest,
    res: Response
  ) => {
    try {
      const { address_id, cart_items, amount, delivery_fee } = req.body;
      const newT = await SequelizeModel.Transaction.create({
        address_id: address_id,
        order_time: new Date().toUTCString(),
        amount: amount,
        delivery_fee: delivery_fee,
        rekening_pribadi: true,
        no_rek: "6240830963",
      });

      for (let i = 0; i < cart_items.length; i++) {
        cart_items[i].transaction_id = newT.transaction_id;
      }
      for (let i = 0; i < cart_items.length; i++) {
        cart_items[i].transaction_id = newT.transaction_id;
      }

      const tItem = await SequelizeModel.TransactionItem.bulkCreate(cart_items);

      // const data = await sequelize.query(
      //   `select * from transaction where transaction_id = ${newT.transaction_id}`,
      //   { type: QueryTypes.SELECT }
      // );
      const data = await SequelizeModel.Transaction.findOne({
        where: {
          transaction_id: newT.transaction_id,
        },
      });
      res.status(201).json({
        status: "SUCCESS",
        data: data,
      });
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  xenditPaymentCallBack: async (req: CustomerAuthRequest, res: Response) => {
    try {
      var value = req.body.external_id;
      var a = new Date();
      var a = new Date();
      var estimatedTime = new Date();
      if (a.getHours() <= 16) {
        estimatedTime = addDays(estimatedTime, 1);
      } else {
        estimatedTime = addDays(estimatedTime, 2);
      }

      const paidTransaction = await SequelizeModel.Transaction.update(
        {
          payment_time: new Date().toUTCString(),
          schedule_time: estimatedTime,
        },
        {
          where: {
            xendit_id: req.body.callback_virtual_account_id,
          },
        }
      );

      console.log(req.body);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  // admin
  getRevenue: async (req: Request, res: Response) => {
    try {
      let data = await sequelize.query(
        `select SUM(amount) as revenue from transaction where payment_time is not null`,
        {
          type: QueryTypes.SELECT,
        }
      );
      const count: any = data[0];
      success.get(res, count.revenue);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getTransactionCount: async (req: Request, res: Response) => {
    try {
      let data = await sequelize.query(
        `select COUNT(*) as count from transaction where payment_time is not null`,
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
  getGraphRevenue: async (req: Request, res: Response) => {
    try {
      let data = await sequelize.query(
        `select 
            sum(case when extract('month' from payment_time) = 1 then amount else 0 end ) as Jan,
            sum(case when extract('month' from payment_time) = 2 then amount else 0 end ) as Feb,
            sum(case when extract('month' from payment_time) = 3 then amount else 0 end ) as Mar,
            sum(case when extract('month' from payment_time) = 4 then amount else 0 end ) as Apr,
            sum(case when extract('month' from payment_time) = 5 then amount else 0 end ) as Mei,
            sum(case when extract('month' from payment_time) = 6 then amount else 0 end ) as Jun,
            sum(case when extract('month' from payment_time) = 7 then amount else 0 end ) as Jul,
            sum(case when extract('month' from payment_time) = 8 then amount else 0 end ) as Aug,
            sum(case when extract('month' from payment_time) = 9 then amount else 0 end ) as Sep,
            sum(case when extract('month' from payment_time) = 10 then amount else 0 end ) as Oct,
            sum(case when extract('month' from payment_time) = 11 then amount else 0 end ) as Nov,
            sum(case when extract('month' from payment_time) = 12 then amount else 0 end ) as Des
            from transaction`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getGraph: async (req: Request, res: Response) => {
    try {
      let data = await sequelize.query(
        `select 
            sum(case when extract('month' from payment_time) = 1 then 1 else 0 end ) as Jan,
            sum(case when extract('month' from payment_time) = 2 then 1 else 0 end ) as Feb,
            sum(case when extract('month' from payment_time) = 3 then 1 else 0 end ) as Mar,
            sum(case when extract('month' from payment_time) = 4 then 1 else 0 end ) as Apr,
            sum(case when extract('month' from payment_time) = 5 then 1 else 0 end ) as Mei,
            sum(case when extract('month' from payment_time) = 6 then 1 else 0 end ) as Jun,
            sum(case when extract('month' from payment_time) = 7 then 1 else 0 end ) as Jul,
            sum(case when extract('month' from payment_time) = 8 then 1 else 0 end ) as Aug,
            sum(case when extract('month' from payment_time) = 9 then 1 else 0 end ) as Sep,
            sum(case when extract('month' from payment_time) = 10 then 1 else 0 end ) as Oct,
            sum(case when extract('month' from payment_time) = 11 then 1 else 0 end ) as Nov,
            sum(case when extract('month' from payment_time) = 12 then 1 else 0 end ) as Des
            from transaction;`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getOrderedItem: async (req: Request, res: Response) => {
    try {
      var data = await sequelize.query(
        `select i.item_id,i.name,SUM(i.satuan*ti.qty) as itemqty,si.name as satuan,d.nama as dropzone,t.schedule_time,t.arrived_time from
        customer_address as ca,kelurahan as k,kelurahan_dropzone as kd,dropzone as d,transaction as t,transaction_item as ti,item as i,satuan_item as si where
        t.arrived_time IS NULL AND
        t.address_id = ca.address_id AND
        ca.kelurahan_id = k.kelurahan_id AND
        k.kelurahan_id = kd.kelurahan_id AND
        kd.dropzone_id = d.dropzone_id AND
        t.transaction_id = ti.transaction_id AND
        ti.item_id = i.item_id AND
        i.satuan_id = si.satuan_id AND
        t.payment_time is not null GROUP BY(i.item_id,si.satuan_id, d.dropzone_id,t.schedule_time,t.arrived_time) order by schedule_time asc;`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getAll: async (req: Request, res: Response) => {
    try {
      let data = await sequelize.query(
        `select transaction_id,amount,arrived_time from transaction where payment_time is not null and arrived_time is not null;`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getUnpaidTransaction: async (req: Request, res: Response) => {
    try {
      let data = await sequelize.query(
        `SELECT t.transaction_id,c.name,t.amount from transaction as t,customer_address as ca,customer as c where 
          ca.address_id = t.address_id AND
          ca.customer_id = c.customer_id AND 
          t.payment_time is null AND
          rekening_pribadi = true AND
          EXTRACT (DAY FROM (NOW()::timestamp - order_time::timestamp)) <= 1;`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getOrder: async (req: Request, res: Response) => {
    try {
      let data = await sequelize.query(
        `select transaction_id,amount,schedule_time from transaction where payment_time is not null and arrived_time is null order by payment_time asc`,
        {
          type: QueryTypes.SELECT,
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  getDetail: async (req: Request, res: Response) => {
    try {
      let data = await sequelize.query(
        `select ti.item_id,i.name as item_name,(ti.price * ti.qty) as total_price,(ti.qty*i.satuan) as total_qty,s.name as satuan_name
            from transaction as t,transaction_item as ti,customer_address a,customer as c,item as i,satuan_item as s where
            t.transaction_id = ti.transaction_id and
            t.address_id = a.address_id and
            a.customer_id = c.customer_id and
            ti.item_id = i.item_id and
            t.payment_time is not null and
            i.satuan_id = s.satuan_id and
            t.transaction_id = ${req.params.transaction_id} order by (t.transaction_id) asc;`,
        {
          type: QueryTypes.SELECT,
        }
      );
      const user = await sequelize.query(
        `select k.name as kelurahan,c.name,c.phone_number,alamat from
        transaction as t,customer_address as ca,kelurahan as k,customer as c where
        t.address_id = ca.address_id and
        ca.kelurahan_id = k.kelurahan_id and
        ca.customer_id = c.customer_id and
        transaction_id = ${req.params.transaction_id};`,
        {
          type: QueryTypes.SELECT,
        }
      );
      res.status(200).json({ detail: data, user: user[0] });
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  transactionToPaid: async (req: Request, res: Response) => {
    try {
      console.log("paid");
      var estimatedTime = new Date();
      if (estimatedTime.getHours() <= 16) {
        estimatedTime = addDays(estimatedTime, 1);
      } else {
        estimatedTime = addDays(estimatedTime, 2);
      }
      var data = await SequelizeModel.Transaction.update(
        {
          payment_time: new Date().toUTCString(),
          schedule_time: estimatedTime,
        },
        {
          where: {
            transaction_id: req.params.transaction_id,
          },
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
  finishTransaction: async (req: Request, res: Response) => {
    try {
      var data = await SequelizeModel.Transaction.update(
        {
          arrived_time: new Date().toUTCString(),
        },
        {
          where: {
            transaction_id: req.params.transaction_id,
          },
        }
      );
      success.get(res, data);
    } catch (e) {
      serverErrorResponse(res, e);
    }
  },
};

export { transactionController };
