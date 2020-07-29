import Xendit from "xendit-node";
import { env } from "../../config";

const xendit = new Xendit({
  secretKey: `${env.xendit_key}`,
});

export { xendit };
