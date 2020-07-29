/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
  return sequelize.define('subcategory', {
    subcategory_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 'nextval(subcategory_category_id_seq::regclass)',
      references: {
        model: 'category',
        key: 'category_id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'subcategory'
  });
};
