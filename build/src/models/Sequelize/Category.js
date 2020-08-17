"use strict";
/* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    return sequelize.define('category', {
        category_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        order: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        show: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        tableName: 'category'
    });
}
exports.default = default_1;
;
