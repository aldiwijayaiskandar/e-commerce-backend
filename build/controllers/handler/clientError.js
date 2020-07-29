"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientError = void 0;
var clientError = {
    bad: function (res) {
        res.status(400).json({
            message: "Bad Request",
        });
    },
    unauthorized: function (res) {
        res.status(401).json({
            message: "Unauthorized",
        });
    },
    beenUsed: function (res, message) {
        res.status(401).json({
            message: message,
        });
    },
    notFound: function (res) {
        res.status(404).json({
            message: "Not Found",
        });
    },
};
exports.clientError = clientError;
