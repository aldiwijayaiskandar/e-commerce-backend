import dotenv from "dotenv";

dotenv.config();

const env = {
  database: process.env.DATABASE,
  database_username: process.env.DATABASE_USERNAME,
  database_password: process.env.DATABASE_PASSWORD,
  database_host: process.env.DATABASE_HOST,
  jwt_admin_key: process.env.JWT_KEY_ADMIN,
  jwt_customer_key: process.env.JWT_KEY_CUSTOMER,
  xendit_key: process.env.XENDIT_SECRET_KEY,
  aws_key_id: process.env.AWS_KEY_ID,
  aws_secret_key: process.env.AWS_SECRET_KEY,
  aws_bucket_name: process.env.AWS_BUCKET_NAME,
};

export { env };
