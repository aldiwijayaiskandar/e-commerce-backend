"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var categories_1 = __importDefault(require("./categories"));
var daerah_1 = __importDefault(require("./daerah"));
var satuan_1 = __importDefault(require("./satuan"));
var dropzone_1 = __importDefault(require("./dropzone"));
var item_1 = __importDefault(require("./item"));
var customer_1 = __importDefault(require("./customer"));
var admin_1 = __importDefault(require("./admin"));
var routes = function (prefix, app) {
    categories_1.default(prefix + "/categories", app);
    daerah_1.default(prefix + "/daerah", app);
    item_1.default(prefix + "/item", app);
    customer_1.default(prefix + "/customer", app);
    admin_1.default(prefix + "/admin", app);
    app.use(prefix + "/satuan", satuan_1.default);
    app.use(prefix + "/dropzone", dropzone_1.default);
};
exports.default = routes;
