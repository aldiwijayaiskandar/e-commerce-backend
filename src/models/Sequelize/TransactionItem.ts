/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
  const transactionItem =  sequelize.define('transaction_item', {
    transaction_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'transaction',
        key: 'transaction_id'
      }
    },
    item_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'item',
        key: 'item_id'
      }
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'transaction_item'
  });
  transactionItem.removeAttribute("id");
  return transactionItem;
};
