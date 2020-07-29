"use strict";
/* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    return sequelize.define('kelurahan', {
        kelurahan_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        kecamatan_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'kecamatan',
                key: 'kecamatan_id'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visible: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        tableName: 'kelurahan'
    });
}
exports.default = default_1;
;
