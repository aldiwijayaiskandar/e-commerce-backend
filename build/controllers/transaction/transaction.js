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
exports.transactionController = void 0;
var sequelize_1 = require("sequelize");
var date_fns_1 = require("date-fns");
var Sequelize_1 = require("../../models/Sequelize");
var handler_1 = require("../handler");
var db_1 = __importDefault(require("../../db/db"));
var virtualAcc_1 = require("../xendit/virtualAcc");
var transactionController = {
    getOngoingCustomerTransaction: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select transaction_id,amount,alamat,order_time,payment_time,arrived_time,schedule_time,xendit_id,rekening_pribadi,no_rek\n        from transaction,customer_address as ca where \n        arrived_time is null and \n        ca.customer_id = " + ((_a = req.userData) === null || _a === void 0 ? void 0 : _a.customer_id) + " and \n        ca.address_id = transaction.address_id order by order_time desc;", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _b.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _b.sent();
                    handler_1.serverErrorResponse(res, e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getCompletedCustomerTransaction: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select transaction_id,amount,alamat,order_time,payment_time,arrived_time,schedule_time,xendit_id,rekening_pribadi,no_rek\n        from transaction,customer_address as ca where \n        arrived_time is not null and \n        ca.customer_id = " + ((_a = req.userData) === null || _a === void 0 ? void 0 : _a.customer_id) + " and \n        ca.address_id = transaction.address_id order by order_time desc;", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _b.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _b.sent();
                    handler_1.serverErrorResponse(res, e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getTransactionDetail: function (req, res) {
        try {
        }
        catch (e) {
            handler_1.serverErrorResponse(res, e);
        }
    },
    getVABank: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("get VA");
                    return [4 /*yield*/, virtualAcc_1.getBank()];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    handler_1.serverErrorResponse(res, e_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getXenditVA: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, virtualAcc_1.getVA(req.params.id)];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_4 = _a.sent();
                    handler_1.serverErrorResponse(res, e_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    xenditTransaction: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, address_id, cart_items, amount, bank_code, delivery_fee, userData, _b, phone_number, name, va, time, newT, i, data, e_5;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 9, , 10]);
                    _a = req.body, address_id = _a.address_id, cart_items = _a.cart_items, amount = _a.amount, bank_code = _a.bank_code, delivery_fee = _a.delivery_fee;
                    return [4 /*yield*/, db_1.default.query("select phone_number, name from customer where customer_id = " + ((_c = req.userData) === null || _c === void 0 ? void 0 : _c.customer_id), {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    userData = _d.sent();
                    _b = userData[0], phone_number = _b.phone_number, name = _b.name;
                    return [4 /*yield*/, virtualAcc_1.createVa(phone_number, name, bank_code, amount)];
                case 2:
                    va = _d.sent();
                    time = new Date().toUTCString();
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Transaction.create({
                            address_id: address_id,
                            order_time: new Date().toUTCString(),
                            amount: amount,
                            xendit_id: va.id,
                            delivery_fee: delivery_fee,
                            rekening_pribadi: false,
                        })];
                case 3:
                    newT = _d.sent();
                    i = 0;
                    _d.label = 4;
                case 4:
                    if (!(i < cart_items.length)) return [3 /*break*/, 7];
                    cart_items[i].transaction_id = newT.transaction_id;
                    return [4 /*yield*/, db_1.default.query("insert into transaction_item values(" + newT.transaction_id + "," + cart_items[i].item_id + "," + cart_items[i].qty + "," + cart_items[i].price + ")", {
                            type: sequelize_1.QueryTypes.INSERT,
                        })];
                case 5:
                    _d.sent();
                    _d.label = 6;
                case 6:
                    i++;
                    return [3 /*break*/, 4];
                case 7: return [4 /*yield*/, db_1.default.query("select * from transaction where transaction_id = " + newT.transaction_id, { type: sequelize_1.QueryTypes.SELECT })];
                case 8:
                    data = _d.sent();
                    if (va.status == "404") {
                        res.status(404).json(va);
                    }
                    else {
                        res.status(201).json({
                            status: "SUCCESS",
                            data: data[0],
                        });
                    }
                    return [3 /*break*/, 10];
                case 9:
                    e_5 = _d.sent();
                    console.log(e_5);
                    handler_1.serverErrorResponse(res, e_5);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    }); },
    rekeningPribadiTransactioN: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, address_id, cart_items, amount, delivery_fee, newT, i, data, e_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    _a = req.body, address_id = _a.address_id, cart_items = _a.cart_items, amount = _a.amount, delivery_fee = _a.delivery_fee;
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Transaction.create({
                            address_id: address_id,
                            order_time: new Date().toUTCString(),
                            amount: amount,
                            delivery_fee: delivery_fee,
                            rekening_pribadi: true,
                            no_rek: "6240830963",
                        })];
                case 1:
                    newT = _b.sent();
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < cart_items.length)) return [3 /*break*/, 5];
                    cart_items[i].transaction_id = newT.transaction_id;
                    return [4 /*yield*/, db_1.default.query("insert into transaction_item values(" + newT.transaction_id + "," + cart_items[i].item_id + "," + cart_items[i].qty + "," + cart_items[i].price + ")", {
                            type: sequelize_1.QueryTypes.INSERT,
                        })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, db_1.default.query("select * from transaction where transaction_id = " + newT.transaction_id, { type: sequelize_1.QueryTypes.SELECT })];
                case 6:
                    data = _b.sent();
                    res.status(201).json({
                        status: "SUCCESS",
                        data: data,
                    });
                    return [3 /*break*/, 8];
                case 7:
                    e_6 = _b.sent();
                    handler_1.serverErrorResponse(res, e_6);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); },
    xenditPaymentCallBack: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var value, a, a, estimatedTime, paidTransaction, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    value = req.body.external_id;
                    a = new Date();
                    a = new Date();
                    estimatedTime = new Date();
                    if (a.getHours() <= 16) {
                        estimatedTime = date_fns_1.addDays(estimatedTime, 1);
                    }
                    else {
                        estimatedTime = date_fns_1.addDays(estimatedTime, 2);
                    }
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Transaction.update({
                            payment_time: new Date().toUTCString(),
                            schedule_time: estimatedTime,
                        }, {
                            where: {
                                xendit_id: req.body.callback_virtual_account_id,
                            },
                        })];
                case 1:
                    paidTransaction = _a.sent();
                    console.log(req.body);
                    return [3 /*break*/, 3];
                case 2:
                    e_7 = _a.sent();
                    handler_1.serverErrorResponse(res, e_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    // admin
    getRevenue: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, count, e_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select SUM(amount) as revenue from transaction where payment_time is not null", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    count = data[0];
                    handler_1.success.get(res, count.revenue);
                    return [3 /*break*/, 3];
                case 2:
                    e_8 = _a.sent();
                    handler_1.serverErrorResponse(res, e_8);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getTransactionCount: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, count, e_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select COUNT(*) as count from transaction where payment_time is not null", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    count = data[0];
                    handler_1.success.get(res, count.count);
                    return [3 /*break*/, 3];
                case 2:
                    e_9 = _a.sent();
                    handler_1.serverErrorResponse(res, e_9);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getGraphRevenue: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select \n            sum(case when extract('month' from payment_time) = 1 then amount else 0 end ) as Jan,\n            sum(case when extract('month' from payment_time) = 2 then amount else 0 end ) as Feb,\n            sum(case when extract('month' from payment_time) = 3 then amount else 0 end ) as Mar,\n            sum(case when extract('month' from payment_time) = 4 then amount else 0 end ) as Apr,\n            sum(case when extract('month' from payment_time) = 5 then amount else 0 end ) as Mei,\n            sum(case when extract('month' from payment_time) = 6 then amount else 0 end ) as Jun,\n            sum(case when extract('month' from payment_time) = 7 then amount else 0 end ) as Jul,\n            sum(case when extract('month' from payment_time) = 8 then amount else 0 end ) as Aug,\n            sum(case when extract('month' from payment_time) = 9 then amount else 0 end ) as Sep,\n            sum(case when extract('month' from payment_time) = 10 then amount else 0 end ) as Oct,\n            sum(case when extract('month' from payment_time) = 11 then amount else 0 end ) as Nov,\n            sum(case when extract('month' from payment_time) = 12 then amount else 0 end ) as Des\n            from transaction", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_10 = _a.sent();
                    handler_1.serverErrorResponse(res, e_10);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getGraph: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select \n            sum(case when extract('month' from payment_time) = 1 then 1 else 0 end ) as Jan,\n            sum(case when extract('month' from payment_time) = 2 then 1 else 0 end ) as Feb,\n            sum(case when extract('month' from payment_time) = 3 then 1 else 0 end ) as Mar,\n            sum(case when extract('month' from payment_time) = 4 then 1 else 0 end ) as Apr,\n            sum(case when extract('month' from payment_time) = 5 then 1 else 0 end ) as Mei,\n            sum(case when extract('month' from payment_time) = 6 then 1 else 0 end ) as Jun,\n            sum(case when extract('month' from payment_time) = 7 then 1 else 0 end ) as Jul,\n            sum(case when extract('month' from payment_time) = 8 then 1 else 0 end ) as Aug,\n            sum(case when extract('month' from payment_time) = 9 then 1 else 0 end ) as Sep,\n            sum(case when extract('month' from payment_time) = 10 then 1 else 0 end ) as Oct,\n            sum(case when extract('month' from payment_time) = 11 then 1 else 0 end ) as Nov,\n            sum(case when extract('month' from payment_time) = 12 then 1 else 0 end ) as Des\n            from transaction;", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_11 = _a.sent();
                    handler_1.serverErrorResponse(res, e_11);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getOrderedItem: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select i.item_id,i.name,SUM(i.satuan*ti.qty) as itemqty,si.name as satuan,d.nama as dropzone,t.schedule_time,t.arrived_time from\n        customer_address as ca,kelurahan as k,kelurahan_dropzone as kd,dropzone as d,transaction as t,transaction_item as ti,item as i,satuan_item as si where\n        t.arrived_time IS NULL AND\n        t.address_id = ca.address_id AND\n        ca.kelurahan_id = k.kelurahan_id AND\n        k.kelurahan_id = kd.kelurahan_id AND\n        kd.dropzone_id = d.dropzone_id AND\n        t.transaction_id = ti.transaction_id AND\n        ti.item_id = i.item_id AND\n        i.satuan_id = si.satuan_id AND\n        t.payment_time is not null GROUP BY(i.item_id,si.satuan_id, d.dropzone_id,t.schedule_time,t.arrived_time) order by schedule_time asc;", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_12 = _a.sent();
                    handler_1.serverErrorResponse(res, e_12);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getAll: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select transaction_id,amount,arrived_time from transaction where payment_time is not null and arrived_time is not null;", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_13 = _a.sent();
                    handler_1.serverErrorResponse(res, e_13);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getUnpaidTransaction: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("SELECT t.transaction_id,c.name,t.amount from transaction as t,customer_address as ca,customer as c where \n          ca.address_id = t.address_id AND\n          ca.customer_id = c.customer_id AND \n          t.payment_time is null AND\n          rekening_pribadi = true AND\n          EXTRACT (DAY FROM (NOW()::timestamp - order_time::timestamp)) <= 1;", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_14 = _a.sent();
                    handler_1.serverErrorResponse(res, e_14);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getOrder: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select transaction_id,amount,schedule_time from transaction where payment_time is not null and arrived_time is null order by payment_time asc", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_15 = _a.sent();
                    handler_1.serverErrorResponse(res, e_15);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getDetail: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, user, e_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, db_1.default.query("select ti.item_id,i.name as item_name,(ti.price * ti.qty) as total_price,(ti.qty*i.satuan) as total_qty,s.name as satuan_name\n            from transaction as t,transaction_item as ti,customer_address a,customer as c,item as i,satuan_item as s where\n            t.transaction_id = ti.transaction_id and\n            t.address_id = a.address_id and\n            a.customer_id = c.customer_id and\n            ti.item_id = i.item_id and\n            t.payment_time is not null and\n            i.satuan_id = s.satuan_id and\n            t.transaction_id = " + req.params.transaction_id + " order by (t.transaction_id) asc;", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, db_1.default.query("select k.name as kelurahan,c.name,c.phone_number,alamat from\n        transaction as t,customer_address as ca,kelurahan as k,customer as c where\n        t.address_id = ca.address_id and\n        ca.kelurahan_id = k.kelurahan_id and\n        ca.customer_id = c.customer_id and\n        transaction_id = " + req.params.transaction_id + ";", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 2:
                    user = _a.sent();
                    res.status(200).json({ detail: data, user: user[0] });
                    return [3 /*break*/, 4];
                case 3:
                    e_16 = _a.sent();
                    handler_1.serverErrorResponse(res, e_16);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    transactionToPaid: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var estimatedTime, data, e_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("paid");
                    estimatedTime = new Date();
                    if (estimatedTime.getHours() <= 16) {
                        estimatedTime = date_fns_1.addDays(estimatedTime, 1);
                    }
                    else {
                        estimatedTime = date_fns_1.addDays(estimatedTime, 2);
                    }
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Transaction.update({
                            payment_time: new Date().toUTCString(),
                            schedule_time: estimatedTime,
                        }, {
                            where: {
                                transaction_id: req.params.transaction_id,
                            },
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_17 = _a.sent();
                    handler_1.serverErrorResponse(res, e_17);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    finishTransaction: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Transaction.update({
                            arrived_time: new Date().toUTCString(),
                        }, {
                            where: {
                                transaction_id: req.params.transaction_id,
                            },
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_18 = _a.sent();
                    handler_1.serverErrorResponse(res, e_18);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
};
exports.transactionController = transactionController;
