import { Router, NextFunction } from "express";
import adminAuth from "../../../middleware/auth/admin.auth";
import { transactionController } from "../../../controllers";

const router = Router();

router
  .get("/", transactionController.getAll)
  .get("/pending", transactionController.getUnpaidTransaction)
  .get("/order", transactionController.getOrder)
  .get("/orderItem", transactionController.getOrderedItem)
  .get("/revenue", transactionController.getRevenue)
  .get("/count", transactionController.getTransactionCount)
  .get("/revenue_month", transactionController.getGraphRevenue)
  .get("/graph", transactionController.getGraph)
  .get("/:transaction_id", transactionController.getDetail)
  .patch("/paid/:transaction_id", transactionController.transactionToPaid)
  .patch("/done/:transaction_id", transactionController.finishTransaction);

export default router;
