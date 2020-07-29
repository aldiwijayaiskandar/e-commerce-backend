"use strict";
/* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var customerCart = sequelize.define("customer_cart", {
        customer_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: "nextval(customer_cart_customer_id_seq::regclass)",
            references: {
                model: "customer",
                key: "customer_id"
            }
        },
        item_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: "nextval(customer_cart_item_id_seq::regclass)",
            references: {
                model: "item",
                key: "item_id"
            }
        },
        qty: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        tableName: "customer_cart"
    });
    customerCart.removeAttribute("id");
    return customerCart;
}
exports.default = default_1;
