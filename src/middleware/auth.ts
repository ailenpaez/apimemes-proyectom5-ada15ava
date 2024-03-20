import { Request, Response, NextFunction } from "express";
import users from "../db/users.json";

const validatorAuth = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.body;

  const exists = users.find((u) => u.token === token);

  if (!exists) return res.json({ error: "PERMISSIONS_ARE_MISSING" });
  next();
};

export { validatorAuth };
