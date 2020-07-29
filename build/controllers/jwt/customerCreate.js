"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../../config");
exports.default = (function (customer_id, email) {
    var token = jsonwebtoken_1.default.sign({
        customer_id: customer_id,
        email: email,
    }, "" + config_1.env.jwt_customer_key);
    return token;
});
