import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import crypto from "crypto";

abstract class UserController {
  private static getAllUsers = async (req: Request, res: Response) => {
    const data = await UserModel.getAllUsers();
    res.json(data);
  };

  private static readUserByEmail = async (req: Request, res: Response) => {
    const email = req.params.email;
    const user = await UserModel.readUserByEmail(email);
    if ("error" in user) {
      res.status(404).json(user);
    } else {
      res.json(user);
    }
  };
}

export { UserController };
