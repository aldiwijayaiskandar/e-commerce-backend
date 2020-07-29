import { Router } from "express";
import {
  categoryController,
  subcategoryController,
} from "../../../controllers";

const router = Router();

router.get("/:category_id", subcategoryController.getById);

export default router;
