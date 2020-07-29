"use strict";
/* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    return sequelize.define('kabupaten', {
        kabupaten_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        provinsi_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 'nextval(kabupaten_provinsi_id_seq::regclass)',
            references: {
                model: 'provinsi',
                key: 'provinsi_id'
            }
        },
        visible: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        tableName: 'kabupaten'
    });
}
exports.default = default_1;
;
