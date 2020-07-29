/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
  return sequelize.define('satuan_item', {
    satuan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'satuan_item'
  });
};
