"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../../../controllers");
var router = express_1.Router();
router
    .get("/", controllers_1.transactionController.getAll)
    .get("/pending", controllers_1.transactionController.getUnpaidTransaction)
    .get("/order", controllers_1.transactionController.getOrder)
    .get("/orderItem", controllers_1.transactionController.getOrderedItem)
    .get("/revenue", controllers_1.transactionController.getRevenue)
    .get("/count", controllers_1.transactionController.getTransactionCount)
    .get("/revenue_month", controllers_1.transactionController.getGraphRevenue)
    .get("/graph", controllers_1.transactionController.getGraph)
    .get("/:transaction_id", controllers_1.transactionController.getDetail)
    .patch("/paid/:transaction_id", controllers_1.transactionController.transactionToPaid)
    .patch("/done/:transaction_id", controllers_1.transactionController.finishTransaction);
exports.default = router;
