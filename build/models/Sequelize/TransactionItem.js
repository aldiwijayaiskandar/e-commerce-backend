"use strict";
/* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var transactionItem = sequelize.define('transaction_item', {
        transaction_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'transaction',
                key: 'transaction_id'
            }
        },
        item_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'item',
                key: 'item_id'
            }
        },
        qty: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: true
        }
    }, {
        tableName: 'transaction_item'
    });
    transactionItem.removeAttribute("id");
    return transactionItem;
}
exports.default = default_1;
;
