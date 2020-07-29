/* jshint indent: 2 */

export default function(sequelize:any, DataTypes:any) {
  return sequelize.define('koordinator', {
    koordinator_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pasar_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 'nextval(koordinator_pasar_id_seq::regclass)',
      references: {
        model: 'dropzone',
        key: 'dropzone_id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    registered_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'koordinator'
  });
};
