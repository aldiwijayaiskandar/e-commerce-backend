"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../../../controllers");
var admin_auth_1 = __importDefault(require("../../../middleware/auth/admin.auth"));
var router = express_1.Router();
router
    .get("/", admin_auth_1.default, controllers_1.customerAdminController.getAll)
    .get("/count", admin_auth_1.default, controllers_1.customerAdminController.getCount)
    .get("/graph", admin_auth_1.default, controllers_1.customerAdminController.graph);
exports.default = router;
