/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
  return sequelize.define('dropzone', {
    dropzone_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'dropzone'
  });
};
