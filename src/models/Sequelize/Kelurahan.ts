/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
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
};
