import { Router } from "express";
import { validatorAuth } from "../middleware/auth";
import { UserController } from "../controller/userController";

const usersRouter = Router();

// users

usersRouter.get("/", validatorAuth, UserController.getAllUsers); //! LISTO
usersRouter.get("/:username", validatorAuth, UserController.readUserByUsername); //! LISTO
usersRouter.post("/register", UserController.createNewUser); //! LISTO
usersRouter.post("/login", UserController.login); //! LISTO
usersRouter.patch("/:username", validatorAuth, UserController.updateUser);
usersRouter.delete("/logout", validatorAuth, UserController.logout); //^ LISTO
usersRouter.delete("/:username", validatorAuth, UserController.deleteUser)

export default usersRouter;
