"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xendit = void 0;
var xendit_node_1 = __importDefault(require("xendit-node"));
var config_1 = require("../../config");
var xendit = new xendit_node_1.default({
    secretKey: "" + config_1.env.xendit_key,
});
exports.xendit = xendit;
