import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import crypto from "crypto";

abstract class UserController{
    public static getAllUsers = async (req: Request, res: Response) =>{
        const data = await UserModel.getAllUsers();
        res.json(data)
    }
}

export { UserController };
