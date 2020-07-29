import { Router } from "express";
import { customerCartController } from "../../../controllers";

const router = Router();

router
  .get("/", customerCartController.getSelf)
  .post(
    "/",
    customerCartController.findItemInCart,
    customerCartController.addToCart
  )
  .patch("/", customerCartController.editQty)
  .delete("/", customerCartController.removeItem)
  .delete("/clear", customerCartController.clearCart);

export default router;
