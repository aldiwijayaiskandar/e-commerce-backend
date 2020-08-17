"use strict";
/* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    return sequelize.define('kecamatan', {
        kecamatan_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        kabupaten_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 'nextval(kecamatan_kabupaten_id_seq::regclass)',
            references: {
                model: 'kabupaten',
                key: 'kabupaten_id'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visible: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        tableName: 'kecamatan'
    });
}
exports.default = default_1;
;
