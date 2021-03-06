import { Router } from "express";
import customerAuth from "../../../middleware/auth/customer.auth";
import { customerAddressController } from "../../../controllers";

const router = Router();

router
  .get("/", customerAddressController.getAll)
  .post("/", customerAddressController.add);

export default router;
