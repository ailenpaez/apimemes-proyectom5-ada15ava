import { Router } from "express";
import { validatorAuth } from "../middleware/auth";
import { UserController } from "../controller/userController";

const usersRouter = Router();

// users

usersRouter.get("/", validatorAuth, UserController.getAllUsers); //! LISTO
usersRouter.get("/:username", validatorAuth, UserController.readUserByUsername); //! LISTO
usersRouter.post("/register", UserController.createNewUser); //! LISTO
usersRouter.post("/login", UserController.login); //! LISTO
usersRouter.patch("/:username", validatorAuth, UserController.updateUser); //^ LISTO?
usersRouter.delete("/logout", validatorAuth); //delete - (deloggear) - logout - NECESITA LOGGEARSE - DELETE
usersRouter.delete("/:username", validatorAuth); //delete - deleteUser - NECESITA LOGGEARSE - DELETE

export default usersRouter;
