/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
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
};
