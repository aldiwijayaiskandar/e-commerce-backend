"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var connect_busboy_1 = __importDefault(require("connect-busboy"));
var cors_1 = __importDefault(require("cors"));
var busboyBodyParser = require("busboy-body-parser");
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};
var middleware = function (app, express) {
    app.use(morgan_1.default("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors_1.default(corsOptions));
    app.use(cookie_parser_1.default());
    app.use(connect_busboy_1.default({ immediate: true }));
    app.use(busboyBodyParser());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: false }));
};
exports.default = middleware;
