"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../../../controllers");
var router = express_1.default();
router.get("/:provinsi_id", controllers_1.kabupatenController.getById);
exports.default = router;
