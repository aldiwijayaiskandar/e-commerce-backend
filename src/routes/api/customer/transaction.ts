import { Router } from "express";
import { transactionController } from "../../../controllers";
import customerAuth from "../../../middleware/auth/customer.auth";

const router = Router();

router
  .get(
    "/:transaction_id",
    customerAuth,
    transactionController.getCustomerTransactionDetail
  )
  .get("/bank", transactionController.getVABank)
  .get(
    "/ongoing",
    customerAuth,
    transactionController.getOngoingCustomerTransaction
  )
  .get(
    "/done",
    customerAuth,
    transactionController.getCompletedCustomerTransaction
  )
  .get("/va/:id", transactionController.getXenditVA)
  .post("/", customerAuth, transactionController.xenditTransaction)
  .post(
    "/rekeningPribadiBCA",
    customerAuth,
    transactionController.rekeningPribadiTransactioN
  )
  .post("/payment", transactionController.xenditPaymentCallBack);

export default router;
