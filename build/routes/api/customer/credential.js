"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var customer_auth_1 = __importDefault(require("../../../middleware/auth/customer.auth"));
var controllers_1 = require("../../../controllers");
var router = express_1.Router();
router
    .get("/profile", customer_auth_1.default, controllers_1.credentialController.getProfile)
    .post("/", controllers_1.credentialController.searchEmail, controllers_1.credentialController.searchPhoneNum, controllers_1.credentialController.createAcc)
    .post("/login", controllers_1.credentialController.login);
exports.default = router;
