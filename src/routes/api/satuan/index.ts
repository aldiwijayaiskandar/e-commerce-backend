import express, { Router } from "express";
import { satuanController } from "../../../controllers";

const router = Router();

router.get("/", satuanController.getAll);

export default router;
