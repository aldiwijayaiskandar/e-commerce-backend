/* jshint indent: 2 */

export default function (sequelize: any, DataTypes: any) {
  return sequelize.define(
    "admin",
    {
      admin_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "admin",
    }
  );
}
