"use strict";
/* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    return sequelize.define('cart', {
        cart_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 'nextval(cart_user_id_seq::regclass)',
            references: {
                model: 'customer',
                key: 'customer_id'
            }
        },
        cart_name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'cart'
    });
}
exports.default = default_1;
;
