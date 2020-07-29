/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
  return sequelize.define('gender', {
    gender_id: {
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
    tableName: 'gender'
  });
};
