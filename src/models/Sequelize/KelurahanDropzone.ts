/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
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
};
