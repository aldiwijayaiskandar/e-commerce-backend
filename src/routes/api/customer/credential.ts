import { Router } from "express";
import customerAuth from "../../../middleware/auth/customer.auth";
import { credentialController } from "../../../controllers";

const router = Router();

router
  .get("/profile", customerAuth, credentialController.getProfile)
  .post(
    "/",
    credentialController.searchEmail,
    credentialController.searchPhoneNum,
    credentialController.createAcc
  )
  .post("/login", credentialController.login);

export default router;
 