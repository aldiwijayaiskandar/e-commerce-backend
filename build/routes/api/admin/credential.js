"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../../../controllers");
var router = express_1.Router();
router.post("/login", controllers_1.adminCredentialController.login);
exports.default = router;
