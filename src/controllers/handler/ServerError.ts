import { Response } from "express";

export default (res: Response, error: any) => {
  res.status(500).json({
    status: "Error",
    error: error,
  });
};
