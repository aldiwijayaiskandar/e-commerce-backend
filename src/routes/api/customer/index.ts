import express from "express";
import customerAuth from "../../../middleware/auth/customer.auth";
import credentialRoutes from "./credential";
import addressRoutes from "./address";
import cartRoutes from "./cart";
import transactionRoutes from "./transaction";

const routes = (prefix: String, app: express.Application) => {
  app.use(`${prefix}/address`, customerAuth, addressRoutes);
  app.use(`${prefix}/cart`, customerAuth, cartRoutes);
  app.use(`${prefix}/credential`, credentialRoutes);
  app.use(`${prefix}/transaction`, transactionRoutes);
};

export default routes;
