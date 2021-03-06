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
exports.credentialController = void 0;
var sequelize_1 = require("sequelize");
var crypto_1 = __importDefault(require("crypto"));
var OAuth2Client = require("google-auth-library").OAuth2Client;
var googleapis_1 = require("googleapis");
var customerCreate_1 = __importDefault(require("../jwt/customerCreate"));
var Sequelize_1 = require("../../models/Sequelize");
var handler_1 = require("../handler");
var db_1 = __importDefault(require("../../db/db"));
var client = new OAuth2Client("739476099878-ubasuv8a4mlfgjn8opegtpblj6qegne8.apps.googleusercontent.com");
var OAuth2 = googleapis_1.google.auth.OAuth2;
var oauth2Client = new OAuth2();
function verivy(token) {
    return __awaiter(this, void 0, void 0, function () {
        var ticket, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.verifyIdToken({
                            idToken: token,
                        })];
                case 1:
                    ticket = _a.sent();
                    return [2 /*return*/, ticket];
                case 2:
                    e_1 = _a.sent();
                    throw e_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
var credentialController = {
    getProfile: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var customer_id, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    customer_id = req.userData.customer_id;
                    return [4 /*yield*/, db_1.default.query("select name from customer where customer_id = " + customer_id, {
                            type: sequelize_1.QueryTypes.SELECT,
                        })];
                case 1:
                    data = _a.sent();
                    handler_1.success.get(res, data[0]);
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    handler_1.serverErrorResponse(res, e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    searchEmail: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var email, found, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    email = req.body.email;
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Customer.count({
                            where: { email: email, google: false },
                        })];
                case 1:
                    found = _a.sent();
                    if (found) {
                        handler_1.clientError.beenUsed(res, "Email have been used");
                    }
                    else {
                        next();
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    console.log(e_3);
                    handler_1.serverErrorResponse(res, e_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    searchPhoneNum: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var phone_number, found, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    phone_number = req.body.phone_number;
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Customer.count({
                            where: { phone_number: phone_number },
                        })];
                case 1:
                    found = _a.sent();
                    if (found) {
                        handler_1.clientError.beenUsed(res, "Phone Number have been used");
                    }
                    else {
                        next();
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_4 = _a.sent();
                    handler_1.serverErrorResponse(res, e_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    createAcc: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, name, email, password, phone_number, gender_id, encryptPass, create, customer_id, createdEmail, token, e_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, name = _a.name, email = _a.email, password = _a.password, phone_number = _a.phone_number, gender_id = _a.gender_id;
                    encryptPass = crypto_1.default
                        .createHash("md5")
                        .update(password)
                        .digest("hex");
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Customer.create({
                            name: name,
                            email: email.toLowerCase(),
                            password: encryptPass,
                            phone_number: phone_number,
                            gender_id: gender_id,
                            created_at: new Date(),
                        })];
                case 1:
                    create = _b.sent();
                    customer_id = create.customer_id;
                    createdEmail = create.email;
                    token = customerCreate_1.default(customer_id, createdEmail);
                    res.status(200).json({
                        message: "Auth Successful",
                        token: token,
                        phone_num: phone_number,
                    });
                    return [3 /*break*/, 3];
                case 2:
                    e_5 = _b.sent();
                    console.log(e_5);
                    handler_1.serverErrorResponse(res, e_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    login: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, encryptPass, userFind, customer_id, token, e_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, email = _a.email, password = _a.password;
                    encryptPass = crypto_1.default
                        .createHash("md5")
                        .update(password)
                        .digest("hex");
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Customer.count({
                            where: { email: email.toLowerCase(), password: encryptPass },
                        })];
                case 1:
                    userFind = _b.sent();
                    if (!userFind) return [3 /*break*/, 3];
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Customer.findOne({
                            attributes: ["customer_id", "phone_number"],
                            where: { email: email.toLowerCase(), password: encryptPass },
                        })];
                case 2:
                    customer_id = _b.sent();
                    if (customer_id.customer_id) {
                        token = customerCreate_1.default(customer_id.customer_id, email.toLowerCase());
                        console.log({
                            message: "Auth successful",
                            token: token,
                            phone_num: customer_id.phone_number,
                        });
                        res.status(200).json({
                            message: "Auth successful",
                            token: token,
                            phone_num: customer_id.phone_number,
                        });
                    }
                    else {
                        res.status(401).json({
                            message: "Auth failed",
                        });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    res.status(401).json({ message: "Auth failed" });
                    _b.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_6 = _b.sent();
                    handler_1.serverErrorResponse(res, e_6);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); },
    googleTokenVerivy: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var ticket, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, verivy(req.body.access_token)];
                case 1:
                    ticket = _a.sent();
                    req.body.googleTicket = ticket.payload;
                    next();
                    return [3 /*break*/, 3];
                case 2:
                    e_7 = _a.sent();
                    console.log("google token verivy error:", e_7);
                    handler_1.serverErrorResponse(res, e_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    searchGoogleEmail: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var googleTicket, email, count, e_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    googleTicket = req.body.googleTicket;
                    email = googleTicket.email;
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Customer.count({
                            where: {
                                email: email,
                                google: true,
                            },
                        })];
                case 1:
                    count = _a.sent();
                    if (count) {
                        next();
                    }
                    else {
                        res.status(200).json({
                            googleStatus: false,
                        });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_8 = _a.sent();
                    console.log("search google email error:", e_8);
                    handler_1.serverErrorResponse(res, e_8);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    googleLogin: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, token, e_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Customer.findOne({
                            attributes: ["customer_id", "phone_number"],
                            where: {
                                email: req.body.googleTicket.email,
                                google: true,
                            },
                        })];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    token = customerCreate_1.default(data.customer_id, req.body.googleTicket.email);
                    res.status(201).json({
                        message: "Auth Successful",
                        token: token,
                        phone_num: data.phone_number,
                    });
                    return [3 /*break*/, 3];
                case 2:
                    e_9 = _a.sent();
                    handler_1.serverErrorResponse(res, e_9);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    googleCreateAccount: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, phone_number, googleTicket, oauth2, data, _b, name, email, picture, gender, ticket, customerGender, create, customer_id, createdEmail, token, e_10;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 4, , 5]);
                    _a = req.body, phone_number = _a.phone_number, googleTicket = _a.googleTicket;
                    oauth2Client.setCredentials({ access_token: req.body.token });
                    oauth2 = googleapis_1.google.oauth2({
                        auth: oauth2Client,
                        version: "v2",
                    });
                    return [4 /*yield*/, oauth2.userinfo.get()];
                case 1:
                    data = _c.sent();
                    _b = data.data, name = _b.name, email = _b.email, picture = _b.picture, gender = _b.gender;
                    return [4 /*yield*/, client.getTokenInfo(req.body.token)];
                case 2:
                    ticket = _c.sent();
                    customerGender = 3;
                    if (gender) {
                        if (gender == "Male") {
                            customerGender = 1;
                        }
                        else if (gender == "Female") {
                            customerGender = 2;
                        }
                    }
                    return [4 /*yield*/, Sequelize_1.SequelizeModel.Customer.create({
                            name: name,
                            email: email === null || email === void 0 ? void 0 : email.toLowerCase(),
                            phone_number: phone_number,
                            gender_id: customerGender,
                            created_at: new Date(),
                            profile_picture: picture,
                            google: true,
                        })];
                case 3:
                    create = _c.sent();
                    customer_id = create.customer_id;
                    createdEmail = create.email;
                    token = customerCreate_1.default(customer_id, createdEmail);
                    res.status(201).json({
                        message: "Auth Successful",
                        token: token,
                        phone_num: phone_number,
                    });
                    return [3 /*break*/, 5];
                case 4:
                    e_10 = _c.sent();
                    console.log(e_10);
                    handler_1.serverErrorResponse(res, e_10);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); },
};
exports.credentialController = credentialController;
