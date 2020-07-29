/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
  return sequelize.define('provinsi', {
    provinsi_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    tableName: 'provinsi'
  });
};
