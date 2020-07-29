/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
  return sequelize.define('subcategory2', {
    subcategory2_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'category',
        key: 'category_id'
      }
    }
  }, {
    tableName: 'subcategory2'
  });
};
