import { Router } from "express";
import { dropzoneController } from "../../../controllers";

const router = Router();

router.get("/", dropzoneController.getAll);

export default router;
