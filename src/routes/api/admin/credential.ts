import { Router } from "express";
import { adminCredentialController } from "../../../controllers";

const router = Router();

router.post("/login", adminCredentialController.login);

export default router;
