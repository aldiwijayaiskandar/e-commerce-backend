"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../../config");
exports.default = (function (admin_id, username) {
    var token = jsonwebtoken_1.default.sign({
        customer_id: admin_id,
        username: username,
    }, "" + config_1.env.jwt_admin_key);
    return token;
});
