import { Router } from "express";
import { itemController } from "../../../controllers";

const router = Router();

router.get("/", itemController.getAll);

export default router;
