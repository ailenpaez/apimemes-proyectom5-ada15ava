import { Router } from "express";
import { validatorAuth } from "../middleware/auth";
import { UserController } from "../controller/userController";

const usersRouter = Router();

usersRouter.get("/", validatorAuth, UserController.getAllUsers);
usersRouter.get("/:username", validatorAuth, UserController.readUserByUsername);
usersRouter.post("/register", UserController.createNewUser);
usersRouter.post("/login", UserController.login);
usersRouter.patch("/:username", validatorAuth, UserController.updateUser);
usersRouter.delete("/logout", validatorAuth, UserController.logout);
usersRouter.delete("/:username", validatorAuth, UserController.deleteUser);

export default usersRouter;
