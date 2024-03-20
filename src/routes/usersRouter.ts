import { Router } from "express";
import { validatorAuth } from "../middleware/auth";
import { UserController } from "../controller/userController";

const usersRouter = Router();

// users

usersRouter.get("/list", validatorAuth, UserController.getAllUsers); //! LISTO
usersRouter.get("/:email", validatorAuth, UserController.readUserByEmail); //! LISTO
usersRouter.post("/register"); // create (register) - createUser - POST
usersRouter.post("/login"); // create (login) - login - POST
usersRouter.patch("/:username", validatorAuth); // update - updateUser - NECESITA LOGGEARSE - PATCH
usersRouter.delete("/:username", validatorAuth); //delete - deleteUser - NECESITA LOGGEARSE - DELETE
usersRouter.delete("/logout", validatorAuth); //delete - (deloggear) - logout - NECESITA LOGGEARSE - DELETE

export default usersRouter;
