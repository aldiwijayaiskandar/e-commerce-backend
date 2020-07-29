import express from "express";
import categoryRoutes from "./categories";
import daerahRoutes from "./daerah";
import satuanRoutes from "./satuan";
import dropzoneRoutes from "./dropzone";
import itemRoutes from "./item";
import customerRoutes from "./customer";
import adminRoutes from "./admin";

const routes = (prefix: String, app: express.Application) => {
  categoryRoutes(`${prefix}/categories`, app);
  daerahRoutes(`${prefix}/daerah`, app);
  itemRoutes(`${prefix}/item`, app);
  customerRoutes(`${prefix}/customer`, app);
  adminRoutes(`${prefix}/admin`, app);
  app.use(`${prefix}/satuan`, satuanRoutes);
  app.use(`${prefix}/dropzone`, dropzoneRoutes);
};

export default routes;
