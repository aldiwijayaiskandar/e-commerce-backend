import { Router, NextFunction } from "express";
import adminAuth from "../../../middleware/auth/admin.auth";
import { itemController } from "../../../controllers";

const router = Router();

router
  .get("/", adminAuth, itemController.adminGetAll)
  .post("/", adminAuth, itemController.add);

export default router;
