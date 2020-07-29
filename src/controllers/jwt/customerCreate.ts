import jwt from "jsonwebtoken";
import { env } from "../../config";

export default (customer_id: number, email: String) => {
  const token = jwt.sign(
    {
      customer_id: customer_id,
      email: email,
    },
    `${env.jwt_customer_key}`
  );
  return token;
};
