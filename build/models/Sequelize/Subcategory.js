"use strict";
/* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    return sequelize.define('subcategory', {
        subcategory_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 'nextval(subcategory_category_id_seq::regclass)',
            references: {
                model: 'category',
                key: 'category_id'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'subcategory'
    });
}
exports.default = default_1;
;
