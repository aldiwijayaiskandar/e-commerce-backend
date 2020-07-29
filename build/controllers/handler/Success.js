"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = void 0;
var success = {
    get: function (res, data) {
        res.status(200).json(data);
    },
    create: function (res, data) {
        res.status(201).json({
            status: "Success",
            data: data,
        });
    },
};
exports.success = success;
