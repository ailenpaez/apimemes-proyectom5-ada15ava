import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import crypto from "crypto";

abstract class UserController {
  public static getAllUsers = async (req: Request, res: Response) => {
    const data = await UserModel.getAllUsers();
    res.json(data);
  };

  public static readUserByUsername = async (req: Request, res: Response) => {
    const username = req.params.username; 
    const user = await UserModel.readUserByUsername(username);
    if ("error" in user) {
      res.status(404).json(user);
    } else {
      res.json(user);
    }
  };
}

export { UserController };
