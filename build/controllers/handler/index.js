"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverErrorResponse = exports.clientError = exports.success = void 0;
var Success_1 = require("./Success");
Object.defineProperty(exports, "success", { enumerable: true, get: function () { return Success_1.success; } });
var clientError_1 = require("./clientError");
Object.defineProperty(exports, "clientError", { enumerable: true, get: function () { return clientError_1.clientError; } });
var ServerError_1 = __importDefault(require("./ServerError"));
exports.serverErrorResponse = ServerError_1.default;
