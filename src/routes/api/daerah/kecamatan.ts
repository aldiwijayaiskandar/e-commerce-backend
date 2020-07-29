import express, { Router } from "express";
import { kecamatanController } from "../../../controllers";

const router: Router = express();

router.get("/:kabupaten_id", kecamatanController.getById);

export default router;
