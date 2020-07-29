/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
  return sequelize.define('item', {
    item_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    satuan: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    subcategory_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 'nextval(item_subcategory_id_seq::regclass)',
      references: {
        model: 'subcategory',
        key: 'subcategory_id'
      }
    },
    satuan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 'nextval(item_satuan_id_seq::regclass)',
      references: {
        model: 'satuan_item',
        key: 'satuan_id'
      }
    },
    subcategory_id2: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'subcategory2',
        key: 'subcategory2_id'
      }
    }
  }, {
    tableName: 'item'
  });
};
