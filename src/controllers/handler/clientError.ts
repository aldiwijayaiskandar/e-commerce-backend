import { Response } from "express";

const clientError = {
  bad: (res: Response) => {
    res.status(400).json({
      message: "Bad Request",
    });
  },
  unauthorized: (res: Response) => {
    res.status(401).json({
      message: "Unauthorized",
    });
  },
  beenUsed: (res: Response, message: String) => {
    res.status(401).json({
      message: message,
    });
  },
  notFound: (res: Response) => {
    res.status(404).json({
      message: "Not Found",
    });
  },
};

export { clientError };
