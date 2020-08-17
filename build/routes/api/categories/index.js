"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var category_1 = __importDefault(require("./category"));
var subcategory_1 = __importDefault(require("./subcategory"));
var label_1 = __importDefault(require("./label"));
var routes = function (prefix, app) {
    app.use("" + prefix, category_1.default);
    app.use(prefix + "/sub", subcategory_1.default);
    app.use(prefix + "/sub2", label_1.default);
};
exports.default = routes;
