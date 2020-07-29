import Sequelize from "sequelize";
import { env } from "../config";

let sequelize = new Sequelize.Sequelize({
  username: env.database_username,
  password: env.database_password,
  database: env.database,
  port: 5432,
  host: env.database_host,
  dialect: "postgres",
  define: {
    timestamps: false,
  },
  dialectOptions: {
    useUTC: false,
  },
  timezone: "+07:00",
});

export default sequelize;
