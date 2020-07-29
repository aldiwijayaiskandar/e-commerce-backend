"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (res, error) {
    res.status(500).json({
        status: "Error",
        error: error,
    });
});
