import express, { Router } from "express";
import { kabupatenController } from "../../../controllers";

const router: Router = express();

router.get("/:provinsi_id", kabupatenController.getById);

export default router;
