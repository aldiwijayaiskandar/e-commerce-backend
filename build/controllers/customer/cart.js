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
exports.customerCartController = void 0;
var sequelize_1 = require("sequelize");
var handler_1 = require("../handler");
var db_1 = __importDefault(require("../../db/db"));
var customerCartController = {
    getSelf: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var customer_id, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    customer_id = req.userData.customer_id;
                    console.log(customer_id);
                    return [4 /*yield*/, db_1.default.query("\n        select i.item_id as item_id,i.image as item_image, i.name as item_name,ip.price,i.satuan as item_kuantitas, si.name as item_satuan,\n            sc.name as subcategory_name,sc2.name as subcategory2_name,c.name as category_name,\n            cc.qty as qty\n            from item as i,subcategory as sc,subcategory2 as sc2,category as c,  customer_cart as cc,satuan_item as si,item_provinsi as ip where \n                i.item_id = ip.item_id and\n                i.subcategory_id = sc.subcategory_id and\n                i.subcategory_id2 = sc2.subcategory2_id and\n                sc.category_id = c.category_id and\n            si.satuan_id = i.satuan_id and\n            i.item_id = cc.item_id and\n            cc.customer_id = " + customer_id + ";\n              ", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    handler_1.serverErrorResponse(res, e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    findItemInCart: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var customer_id, item_id, find, item_found, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    customer_id = req.userData.customer_id;
                    item_id = req.body.item_id;
                    return [4 /*yield*/, db_1.default.query("select COUNT(*) as item_found from customer_cart where item_id = " + item_id + " AND customer_id = " + customer_id, {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    find = _a.sent();
                    item_found = find[0].item_found;
                    if (item_found == 0) {
                        next();
                    }
                    else {
                        handler_1.clientError.bad(res);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    handler_1.serverErrorResponse(res, e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    addToCart: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var customer_id, item_id, data, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    customer_id = req.userData.customer_id;
                    item_id = req.body.item_id;
                    return [4 /*yield*/, db_1.default.query("\n        insert into customer_cart \n        (customer_id,item_id,qty) \n        values(" + customer_id + "," + item_id + ",1)\n      ", { type: sequelize_1.QueryTypes.INSERT })];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    handler_1.success.create(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    handler_1.serverErrorResponse(res, e_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    editQty: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var customer_id, _a, item_id, qty, data, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    customer_id = req.userData.customer_id;
                    _a = req.body, item_id = _a.item_id, qty = _a.qty;
                    return [4 /*yield*/, db_1.default.query("\n        update customer_cart set qty = " + qty + " where item_id = " + item_id + " AND customer_id = " + customer_id + "\n      ", {
                            type: sequelize_1.QueryTypes.UPDATE,
                        })];
                case 1:
                    data = _b.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_4 = _b.sent();
                    handler_1.serverErrorResponse(res, e_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    removeItem: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var customer_id, item_id, data, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    customer_id = req.userData.customer_id;
                    item_id = req.query.item_id;
                    return [4 /*yield*/, db_1.default.query("\n          delete from customer_cart where customer_id =" + customer_id + " AND item_id = " + item_id, { type: sequelize_1.QueryTypes.DELETE })];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_5 = _a.sent();
                    handler_1.serverErrorResponse(res, e_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    clearCart: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var customer_id, data, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    customer_id = req.userData.customer_id;
                    return [4 /*yield*/, db_1.default.query("\n          delete from customer_cart where customer_id = " + customer_id, {
                            type: sequelize_1.QueryTypes.DELETE,
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_6 = _a.sent();
                    handler_1.serverErrorResponse(res, e_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
};
exports.customerCartController = customerCartController;
