"use strict";
/* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var customerCart = sequelize.define("customer_address", {
        customer_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: "nextval(customer_alamat_customer_id_seq::regclass)",
            references: {
                model: "customer",
                key: "customer_id"
            }
        },
        alamat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kode_pos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        kelurahan_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: "kelurahan",
                key: "kelurahan_id"
            }
        }
    }, {
        tableName: "customer_address"
    });
    customerCart.removeAttribute("id");
    return customerCart;
}
exports.default = default_1;
