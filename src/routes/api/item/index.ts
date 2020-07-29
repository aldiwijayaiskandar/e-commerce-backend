import express from "express";
import itemRoutes from "./item";
import itemSearchRoutes from "./search";
import itemSuggestedRoutes from "./suggested";

const routes = (prefix: String, app: express.Application) => {
  app.use(`${prefix}`, itemRoutes);
  app.use(`${prefix}/search`, itemSearchRoutes);
  app.use(`${prefix}/suggested`, itemSuggestedRoutes);
};

export default routes;
