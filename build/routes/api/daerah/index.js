"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var provinsi_1 = __importDefault(require("./provinsi"));
var kabupaten_1 = __importDefault(require("./kabupaten"));
var kecamatan_1 = __importDefault(require("./kecamatan"));
var kelurahan_1 = __importDefault(require("./kelurahan"));
var routes = function (prefix, app) {
    app.use(prefix + "/provinsi", provinsi_1.default);
    app.use(prefix + "/kabupaten", kabupaten_1.default);
    app.use(prefix + "/kecamatan", kecamatan_1.default);
    app.use(prefix + "/kelurahan", kelurahan_1.default);
};
exports.default = routes;
