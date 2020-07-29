import { Request } from "express";

interface UserData {
  customer_id: number;
}

export interface CustomerAuthRequest extends Request {
  userData?: UserData;
}
