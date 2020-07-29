/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
  return sequelize.define('category', {
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    show:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'category'
  });
};
