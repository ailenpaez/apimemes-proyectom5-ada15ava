import { Request, Response, response } from "express";
import { UserModel } from "../model/userModel";
import crypto from "crypto";
import { validateUser } from "../validators/usersValidator";

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

  public static createNewUser = async (req: Request, res: Response) => {
    const validate = validateUser(req.body);
    if (!validate.success) return res.status(400).json({ error: "VALIDATE!" });

    const { mail, username, password, interests } = req.body;

    const hashedPass = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const response = await UserModel.createNewUser({
      mail,
      username,
      hashedPass,
      interests
    });

    if (response === 409) {
      return res.status(409).json({ error: "USER_EXSISTS!" });
    }

    res
      .status(201)
      .json({ message: "USER_CREATED_SUCCESSFULLY!", username: response });
  };

}

// {
//   "mail": "usuario1@ejemplo.com",
//   "username": "Usuario1",
//   "password": "hashedPassword1",
//   "token": "token123",
//   "interests": ["Tecnología", "Programación", "Humor"]
// }

export { UserController };
