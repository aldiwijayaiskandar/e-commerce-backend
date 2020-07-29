import { Router } from "express";
import { labelController } from "../../../controllers";

const router = Router();

router
//   .get("/", labelController.getAll)
  .get("/:category_id", labelController.getById);

export default router;
