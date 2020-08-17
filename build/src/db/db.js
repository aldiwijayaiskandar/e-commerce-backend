"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
var config_1 = require("../config");
var sequelize = new sequelize_1.default.Sequelize({
    username: config_1.env.database_username,
    password: config_1.env.database_password,
    database: config_1.env.database,
    port: 5432,
    host: config_1.env.database_host,
    dialect: "postgres",
    define: {
        timestamps: false,
    },
    dialectOptions: {
        useUTC: false,
    },
    timezone: "+07:00",
});
exports.default = sequelize;
