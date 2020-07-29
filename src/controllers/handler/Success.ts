import { Response } from "express";

const success = {
  get: (res: Response, data: any) => {
    res.status(200).json(data);
  },
  create: (res: Response, data: any) => {
    res.status(201).json({
      status: "Success",
      data: data,
    });
  },
};

export { success };
