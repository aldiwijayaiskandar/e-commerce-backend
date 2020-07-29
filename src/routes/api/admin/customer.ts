import { Router } from "express";
import { customerAdminController } from "../../../controllers";
import adminAuth from "../../../middleware/auth/admin.auth";

const router = Router();

router
  .get("/", adminAuth, customerAdminController.getAll)
  .get("/count", adminAuth, customerAdminController.getCount)
  .get("/graph", adminAuth, customerAdminController.graph);

export default router;
