import jwt from "jsonwebtoken";
import { env } from "../../config";

export default (admin_id: number, username: String) => {
  const token = jwt.sign(
    {
      customer_id: admin_id,
      username: username,
    },
    `${env.jwt_admin_key}`
  );
  return token;
};
