"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var customer_auth_1 = __importDefault(require("../../../middleware/auth/customer.auth"));
var credential_1 = __importDefault(require("./credential"));
var address_1 = __importDefault(require("./address"));
var cart_1 = __importDefault(require("./cart"));
var transaction_1 = __importDefault(require("./transaction"));
var routes = function (prefix, app) {
    app.use(prefix + "/address", customer_auth_1.default, address_1.default);
    app.use(prefix + "/cart", customer_auth_1.default, cart_1.default);
    app.use(prefix + "/credential", credential_1.default);
    app.use(prefix + "/transaction", transaction_1.default);
};
exports.default = routes;
