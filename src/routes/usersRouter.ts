import { Router } from "express";
import { validatorAuth } from "../middleware/auth";
import { UserController } from "../controller/userController";

const usersRouter = Router();

// users

usersRouter.get("/", validatorAuth, UserController.getAllUsers); //read - readUsers - NECESITA LOGGEARSE (es opcional) - NO MOSTRAR DATA SENSIBLE
usersRouter.get("/:email", validatorAuth); //readUserByEmail - NECESITA LOGGEARSE (es opcional) - GET
usersRouter.post("/register"); // create (register) - createUser - POST
usersRouter.post("/login"); // create (login) - login - POST
usersRouter.patch("/:username", validatorAuth); // update - updateUser - NECESITA LOGGEARSE - PATCH
usersRouter.delete("/:username", validatorAuth); //delete - deleteUser - NECESITA LOGGEARSE - DELETE
usersRouter.delete("/logout", validatorAuth); //delete - (deloggear) - logout - NECESITA LOGGEARSE - DELETE

export default usersRouter;
