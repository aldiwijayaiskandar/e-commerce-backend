/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
  const cartItem = sequelize.define('cart_item', {
    cart_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 'nextval(cart_item_cart_id_seq::regclass)',
      references: {
        model: 'cart',
        key: 'cart_id'
      }
    },
    item_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 'nextval(cart_item_item_id_seq::regclass)',
      references: {
        model: 'item',
        key: 'item_id'
      }
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'cart_item'
  });

  cartItem.removeAttribute("id");

  return cartItem;
};
