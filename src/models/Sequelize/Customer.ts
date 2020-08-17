/* jshint indent: 2 */

export default function (sequelize: any, DataTypes: any) {
  return sequelize.define(
    "customer",
    {
      customer_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      gender_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: "nextval(customer_gender_id_seq::regclass)",
        references: {
          model: "gender",
          key: "gender_id",
        },
      },
      google: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      profile_picture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "customer",
    }
  );
}
