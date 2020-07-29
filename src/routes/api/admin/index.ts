import express from "express";
import credentialRoutes from "./credential";
import itemRoutes from "./item";
import customerRoutes from "./customer";
import transactionRoutes from "./transaction";

export default (prefix: String, app: express.Application) => {
  app.use(`${prefix}/credential`, credentialRoutes);
  app.use(`${prefix}/item`, itemRoutes);
  app.use(`${prefix}/customer`, customerRoutes);
  app.use(`${prefix}/transaction`, transactionRoutes);
};
