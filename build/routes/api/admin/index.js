"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var credential_1 = __importDefault(require("./credential"));
var item_1 = __importDefault(require("./item"));
var customer_1 = __importDefault(require("./customer"));
var transaction_1 = __importDefault(require("./transaction"));
exports.default = (function (prefix, app) {
    app.use(prefix + "/credential", credential_1.default);
    app.use(prefix + "/item", item_1.default);
    app.use(prefix + "/customer", customer_1.default);
    app.use(prefix + "/transaction", transaction_1.default);
});
