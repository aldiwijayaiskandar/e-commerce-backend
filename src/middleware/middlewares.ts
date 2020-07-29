import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logger from "morgan";
import busboy from "connect-busboy";
import cors from "cors";
const busboyBodyParser = require("busboy-body-parser");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const middleware = (app: express.Application, express: any) => {
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors(corsOptions));
  app.use(cookieParser());
  app.use(busboy({ immediate: true }));
  app.use(busboyBodyParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};

export default middleware;
