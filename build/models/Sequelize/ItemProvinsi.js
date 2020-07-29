"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var itemProvinsi = sequelize.define("item_provinsi", {
        item_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "item",
                key: "item_id",
            },
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        provinsi_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "provinsi",
                key: "provinsi_id",
            },
        },
    }, {
        tableName: "item_provinsi",
    });
    itemProvinsi.removeAttribute("id");
    return itemProvinsi;
}
exports.default = default_1;
