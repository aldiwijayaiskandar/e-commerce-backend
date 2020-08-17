"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
var middlewares_1 = __importDefault(require("./middleware/middlewares"));
var app = express_1.default();
app.use("/admin", express_1.default.static(path_1.default.join(__dirname, "../", "web_admin/build_admin")));
app.get("/admin/*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../", "web_admin/build_admin", "index.html"));
});
app.use("/privacy", express_1.default.static(path_1.default.join(__dirname, "../", "privacy")));
app.get("/privacy", express_1.default.static(path_1.default.join(__dirname, "../", "privacy")));
app.get("/android", function (req, res) {
    res.redirect("https://play.google.com/store/apps/details?id=com.antarblanja.customer.app");
});
app.use("/", express_1.default.static(path_1.default.join(__dirname, "../", "web_main/build_main")));
middlewares_1.default(app, express_1.default);
routes_1.default(app);
app.listen(8080, function () {
    console.log("Running at port 8080");
});
