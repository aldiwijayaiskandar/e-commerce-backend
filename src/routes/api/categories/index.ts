import express from "express";
import categoriesRoutes from "./category";
import subcategoriesRoutes from "./subcategory";
import labelRoutes from "./label";

const routes = (prefix: String, app: express.Application) => {
  app.use(`${prefix}`, categoriesRoutes);
  app.use(`${prefix}/sub`, subcategoriesRoutes);
  app.use(`${prefix}/sub2`, labelRoutes);
};

export default routes;
