"use strict";
/* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    return sequelize.define('koordinator', {
        koordinator_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pasar_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 'nextval(koordinator_pasar_id_seq::regclass)',
            references: {
                model: 'dropzone',
                key: 'dropzone_id'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        registered_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        tableName: 'koordinator'
    });
}
exports.default = default_1;
;
