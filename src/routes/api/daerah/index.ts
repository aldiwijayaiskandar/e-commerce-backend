import express from "express";
import provinsiRoutes from "./provinsi";
import kabupatenRoutes from "./kabupaten";
import kecamatanRoutes from "./kecamatan";
import kelurahanRoutes from "./kelurahan";

const routes = (prefix: String, app: express.Application) => {
  app.use(`${prefix}/provinsi`, provinsiRoutes);
  app.use(`${prefix}/kabupaten`, kabupatenRoutes);
  app.use(`${prefix}/kecamatan`, kecamatanRoutes);
  app.use(`${prefix}/kelurahan`, kelurahanRoutes);
};

export default routes;
