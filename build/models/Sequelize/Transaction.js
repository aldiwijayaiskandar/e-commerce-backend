"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    return sequelize.define("transaction", {
        transaction_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        address_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "customer_address",
                key: "address_id",
            },
        },
        order_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        payment_time: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        arrived_time: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        schedule_time: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        xendit_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        delivery_fee: {
            type: DataTypes.BIGINT,
            allowNull: true,
            defaultValue: "0",
        },
        rekening_pribadi: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        no_rek: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: "transaction",
    });
}
exports.default = default_1;
