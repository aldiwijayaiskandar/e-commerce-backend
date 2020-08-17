import { Router, Request, Response } from "express";
const { OAuth2Client } = require("google-auth-library");
import { env } from "../../../config";
import customerAuth from "../../../middleware/auth/customer.auth";
import { credentialController } from "../../../controllers";
import creds from "./client_secret_739476099878-6vilelcjgioc73f2bmk30iql591rl329.apps.googleusercontent.com (1).json";
const router = Router();
const client = new OAuth2Client(
  "739476099878-ubasuv8a4mlfgjn8opegtpblj6qegne8.apps.googleusercontent.com"
);

async function verivy(token: any) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
    });
    return ticket;
  } catch (e) {
    console.error(e);
  }
}

router
  .get("/profile", customerAuth, credentialController.getProfile)
  .post(
    "/",
    credentialController.searchEmail,
    credentialController.searchPhoneNum,
    credentialController.createAcc
  )
  .post("/login", credentialController.login)
  .post(
    "/google/createAccount",
    credentialController.searchPhoneNum,
    credentialController.googleTokenVerivy,
    credentialController.searchPhoneNum,
    credentialController.googleCreateAccount
  )
  .post(
    "/google/login",
    credentialController.googleTokenVerivy,
    credentialController.searchGoogleEmail,
    credentialController.googleLogin
  );

export default router;
