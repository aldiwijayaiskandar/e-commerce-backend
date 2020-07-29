import { Router } from "express";
import { categoryController } from "../../../controllers";

const router = Router();

router.get("/", categoryController.getAllVisible);

export default router;
