"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeModel = void 0;
var db_1 = __importDefault(require("../../db/db"));
var sequelize_1 = __importDefault(require("sequelize"));
var Transaction_1 = __importDefault(require("./Transaction"));
var Customer_1 = __importDefault(require("./Customer"));
var Admin_1 = __importDefault(require("./Admin"));
var Item_1 = __importDefault(require("./Item"));
var ItemProvinsi_1 = __importDefault(require("./ItemProvinsi"));
var TransactionItem_1 = __importDefault(require("./TransactionItem"));
var SequelizeModel = {
    Transaction: Transaction_1.default(db_1.default, sequelize_1.default),
    TransactionItem: TransactionItem_1.default(db_1.default, sequelize_1.default),
    Customer: Customer_1.default(db_1.default, sequelize_1.default),
    Admin: Admin_1.default(db_1.default, sequelize_1.default),
    Item: Item_1.default(db_1.default, sequelize_1.default),
    ItemProvinsi: ItemProvinsi_1.default(db_1.default, sequelize_1.default),
};
exports.SequelizeModel = SequelizeModel;
