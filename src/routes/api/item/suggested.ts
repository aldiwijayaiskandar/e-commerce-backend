import { Router } from "express";
import { itemController, itemSuggestionController } from "../../../controllers";

const router = Router();

router
  .get("/buah", itemSuggestionController.buah)
  .get("/sayur", itemSuggestionController.sayur);

export default router;
