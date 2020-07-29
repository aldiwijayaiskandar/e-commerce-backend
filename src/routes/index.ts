import express from 'express'
import api from "./api";

const routes = (app:express.Application) => {
  api("/api", app);
};

export default routes;
