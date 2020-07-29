"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../../../controllers");
var customer_auth_1 = __importDefault(require("../../../middleware/auth/customer.auth"));
var router = express_1.Router();
router
    .get("/bank", controllers_1.transactionController.getVABank)
    .get("/ongoing", customer_auth_1.default, controllers_1.transactionController.getOngoingCustomerTransaction)
    .get("/done", customer_auth_1.default, controllers_1.transactionController.getCompletedCustomerTransaction)
    .get("/va/:id", controllers_1.transactionController.getXenditVA)
    .post("/", customer_auth_1.default, controllers_1.transactionController.xenditTransaction)
    .post("/rekeningPribadiBCA", customer_auth_1.default, controllers_1.transactionController.rekeningPribadiTransactioN)
    .post("/payment", controllers_1.transactionController.xenditPaymentCallBack);
exports.default = router;
