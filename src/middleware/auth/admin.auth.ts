import express from "express";
import jwt from "jsonwebtoken";
import { env } from "../../config";
import { clientError } from "../../controllers/handler";

export default (
  req: any,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, `${env.jwt_admin_key}`);
    req.userData = decoded;
    next();
  } catch (e) {
    return clientError.unauthorized(res);
  }
};
