"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../../../controllers");
var router = express_1.Router();
router
    .get("/buah", controllers_1.itemSuggestionController.buah)
    .get("/sayur", controllers_1.itemSuggestionController.sayur);
exports.default = router;
