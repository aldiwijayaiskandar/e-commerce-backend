"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var env = {
    database: process.env.DATABASE,
    database_username: process.env.DATABASE_USERNAME,
    database_password: process.env.DATABASE_PASSWORD,
    database_host: process.env.DATABASE_HOST,
    jwt_admin_key: process.env.JWT_KEY_ADMIN,
    jwt_customer_key: process.env.JWT_KEY_CUSTOMER,
    xendit_key: process.env.XENDIT_SECRET_KEY,
    aws_key_id: process.env.AWS_KEY_ID,
    aws_secret_key: process.env.AWS_SECRET_KEY,
    aws_bucket_name: process.env.AWS_BUCKET_NAME,
    google_client_id: process.env.GOOGLE_CLIENT_ID,
    google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
};
exports.env = env;
