import express, { Router } from "express";
import { provinsiController } from "../../../controllers";

const router: Router = express();

router.get("/", provinsiController.getAll);

export default router;
