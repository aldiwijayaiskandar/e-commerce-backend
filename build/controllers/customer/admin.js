"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerAdminController = void 0;
var sequelize_1 = require("sequelize");
var handler_1 = require("../handler");
var Sequelize_1 = require("../../models/Sequelize");
var db_1 = __importDefault(require("../../db/db"));
var Customer = Sequelize_1.SequelizeModel.Customer;
var customerAdminController = {
    getAll: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Customer.findAll({
                            attributes: [
                                "customer_id",
                                "name",
                                "email",
                                "phone_number",
                                "created_at",
                                "gender_id",
                            ],
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    handler_1.serverErrorResponse(res, e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getCount: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, count, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select COUNT(*) as count from customer;", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    count = data[0];
                    handler_1.success.get(res, count);
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    handler_1.serverErrorResponse(res, e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    graph: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select \n          sum(case when extract('month' from created_at) = 1 then 1 else 0 end ) as Jan,\n          sum(case when extract('month' from created_at) = 2 then 1 else 0 end ) as Feb,\n          sum(case when extract('month' from created_at) = 3 then 1 else 0 end ) as Mar,\n          sum(case when extract('month' from created_at) = 4 then 1 else 0 end ) as Apr,\n          sum(case when extract('month' from created_at) = 5 then 1 else 0 end ) as Mei,\n          sum(case when extract('month' from created_at) = 6 then 1 else 0 end ) as Jun,\n          sum(case when extract('month' from created_at) = 7 then 1 else 0 end ) as Jul,\n          sum(case when extract('month' from created_at) = 8 then 1 else 0 end ) as Aug,\n          sum(case when extract('month' from created_at) = 9 then 1 else 0 end ) as Sep,\n          sum(case when extract('month' from created_at) = 10 then 1 else 0 end ) as Oct,\n          sum(case when extract('month' from created_at) = 11 then 1 else 0 end ) as Nov,\n          sum(case when extract('month' from created_at) = 12 then 1 else 0 end ) as Des\n          from customer;", { type: sequelize_1.QueryTypes.SELECT })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data[0]);
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    handler_1.serverErrorResponse(res, e_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
};
exports.customerAdminController = customerAdminController;
