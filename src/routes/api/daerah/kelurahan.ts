import express, { Router } from "express";
import { kelurahanController } from "../../../controllers";

const router: Router = express();

router.get("/:kecamatan_id", kelurahanController.getById);

export default router;
