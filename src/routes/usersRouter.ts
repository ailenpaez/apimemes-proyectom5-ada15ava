import { Router } from "express";

const usersRouter = Router();

// users

usersRouter.get("/"); //read - readUsers - NECESITA LOGGEARSE (es opcional) - NO MOSTRAR DATA SENSIBLE
usersRouter.get("/:email"); //readUserByEmail - NECESITA LOGGEARSE (es opcional) - GET
usersRouter.post("/register"); // create (register) - createUser - POST
usersRouter.post("/login"); // create (login) - login - POST
usersRouter.patch("/:username"); // update - updateUser - NECESITA LOGGEARSE - PATCH
usersRouter.delete("/:username"); //delete - deleteUser - NECESITA LOGGEARSE - DELETE
usersRouter.delete("/logout"); //delete - (deloggear) - logout - NECESITA LOGGEARSE - DELETE
