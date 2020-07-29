"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../../../controllers");
var router = express_1.Router();
router
    .get("/", controllers_1.customerCartController.getSelf)
    .post("/", controllers_1.customerCartController.findItemInCart, controllers_1.customerCartController.addToCart)
    .patch("/", controllers_1.customerCartController.editQty)
    .delete("/", controllers_1.customerCartController.removeItem)
    .delete("/clear", controllers_1.customerCartController.clearCart);
exports.default = router;
