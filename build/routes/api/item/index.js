"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = __importDefault(require("./item"));
var search_1 = __importDefault(require("./search"));
var suggested_1 = __importDefault(require("./suggested"));
var routes = function (prefix, app) {
    app.use("" + prefix, item_1.default);
    app.use(prefix + "/search", search_1.default);
    app.use(prefix + "/suggested", suggested_1.default);
};
exports.default = routes;
