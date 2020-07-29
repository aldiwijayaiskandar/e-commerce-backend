"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var admin_auth_1 = __importDefault(require("../../../middleware/auth/admin.auth"));
var controllers_1 = require("../../../controllers");
var router = express_1.Router();
router
    .get("/", admin_auth_1.default, controllers_1.itemController.adminGetAll)
    .post("/", admin_auth_1.default, controllers_1.itemController.add);
exports.default = router;
