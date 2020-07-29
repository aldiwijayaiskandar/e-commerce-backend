"use strict";
/* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    return sequelize.define('kelurahan_dropzone', {
        dropzone_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'dropzone',
                key: 'dropzone_id'
            }
        },
        kelurahan_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'kelurahan',
                key: 'kelurahan_id'
            }
        }
    }, {
        tableName: 'kelurahan_dropzone'
    });
}
exports.default = default_1;
;
