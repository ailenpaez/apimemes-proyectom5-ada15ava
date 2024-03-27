import { Request, Response, NextFunction } from "express";
import users from "../database/users.json";

const validatorAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.get("Authorization");
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  const exists = users.find((u) => u.token === token);
  if (!exists) return res.status(401).json({ error: "Unauthorized" });

  next();
};

export { validatorAuth };
