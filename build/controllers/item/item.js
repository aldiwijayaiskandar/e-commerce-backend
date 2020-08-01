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
exports.itemController = void 0;
var sequelize_1 = require("sequelize");
var busboy_1 = __importDefault(require("busboy"));
var AWS_1 = require("../AWS");
var models_1 = require("../../models");
var handler_1 = require("../handler");
var db_1 = __importDefault(require("../../db/db"));
var itemController = {
    getAll: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select i.item_id as item_id,i.image as item_image,ip.price as price, i.name as item_name,i.satuan as item_kuantitas,si.name as item_satuan,\n            sc.name as subcategory_name,sc2.name as subcategory2_name, c.name as category_name\n            from item as i,subcategory as sc,subcategory2 as sc2,category as c,satuan_item as si,item_provinsi as ip where \n            ip.item_id = i.item_id and\n            i.subcategory_id = sc.subcategory_id and\n            i.subcategory_id2 = sc2.subcategory2_id and\n            sc.category_id = c.category_id and\n            si.satuan_id = i.satuan_id LIMIT 10;", {
                            type: sequelize_1.QueryTypes.SELECT,
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
    search: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var category_id, search, any, sql, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    category_id = req.query.category_id;
                    console.log(category_id);
                    search = req.query.search;
                    console.log(search);
                    any = "ANY(select category_id from category)";
                    sql = "select i.item_id as item_id,i.image as item_image, i.name as item_name,ip.price,i.satuan as item_kuantitas,si.name as item_satuan,\n                        sc.name as subcategory_name,sc2.name as subcategory2_name, c.name as category_name\n                        from item as i,subcategory as sc,subcategory2 as sc2,category as c,satuan_item as si,item_provinsi as ip where\n                          ip.item_id = i.item_id and\n                          i.subcategory_id = sc.subcategory_id and\n                          i.subcategory_id2 = sc2.subcategory2_id and\n                          sc.category_id = c.category_id and\n                          si.satuan_id = i.satuan_id and\n                          sc.category_id =  " + (req.query.category_id != "null"
                        ? req.query.category_id
                        : any) + " and\n                          LOWER(i.name) LIKE '%" + (search.toLowerCase() != "null"
                        ? search.toLowerCase()
                        : "") + "%';";
                    return [4 /*yield*/, db_1.default.query(sql, {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    handler_1.serverErrorResponse(res, e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    adminGetAll: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.default.query("select i.item_id as item_id,i.name as item_name,i.satuan as item_kuantitas, si.name as item_satuan,\n         sc.name as subcategory_name,sc2.name as subcategory2_name,c.name as category_name\n          from item as i,subcategory as sc,subcategory2 as sc2,category as c,  satuan_item as si,item_provinsi as ip where \n          i.item_id = ip.item_id and\n          i.subcategory_id = sc.subcategory_id and\n          i.subcategory_id2 = sc2.subcategory2_id and\n          sc.category_id = c.category_id and\n          si.satuan_id = i.satuan_id order by(i.item_id) asc", {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
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
    add: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var Item_1, ItemProvinsi_1, busboy;
        return __generator(this, function (_a) {
            try {
                Item_1 = models_1.SequelizeModel.Item, ItemProvinsi_1 = models_1.SequelizeModel.ItemProvinsi;
                busboy = new busboy_1.default({ headers: req.headers });
                busboy.on("finish", function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var timeStamp, body, item_provinsi, item, i, itemProvinsi, file;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    timeStamp = new Date().getTime() + Math.random();
                                    body = {
                                        name: req.body.name,
                                        image: timeStamp.toString(),
                                        satuan: req.body.satuan,
                                        subcategory_id: req.body.subcategory_id,
                                        subcategory_id2: req.body.subcategory_id2,
                                        satuan_id: req.body.satuan_id,
                                    };
                                    item_provinsi = JSON.parse(req.body.item_provinsi);
                                    return [4 /*yield*/, Item_1.create(body)];
                                case 1:
                                    item = _a.sent();
                                    for (i = 0; i < item_provinsi.length; i++) {
                                        item_provinsi[i].item_id = item.item_id;
                                    }
                                    return [4 /*yield*/, ItemProvinsi_1.bulkCreate(item_provinsi)];
                                case 2:
                                    itemProvinsi = _a.sent();
                                    file = req.files.image;
                                    AWS_1.uploadToS3(body.image, file.data);
                                    handler_1.success.create(res, {});
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                req.pipe(busboy);
            }
            catch (e) {
                console.log(e);
                handler_1.serverErrorResponse(res, e);
            }
            return [2 /*return*/];
        });
    }); },
};
exports.itemController = itemController;
