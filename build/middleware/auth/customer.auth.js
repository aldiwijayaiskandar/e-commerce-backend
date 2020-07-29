"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../../config");
var handler_1 = require("../../controllers/handler");
exports.default = (function (req, res, next) {
    try {
        var token = req.headers.authorization;
        var decoded = jsonwebtoken_1.default.verify(token, "" + config_1.env.jwt_customer_key);
        req.userData = decoded;
        next();
    }
    catch (e) {
        return handler_1.clientError.unauthorized(res);
    }
});
