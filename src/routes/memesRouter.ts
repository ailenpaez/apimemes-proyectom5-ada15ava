import { Router } from "express";
import { MemesController } from "../controller/memesController";
import { validatorAuth } from "../middleware/auth";

const memesRouter = Router();

memesRouter.get("/", MemesController.getAllMemes); //read - getAllFigures - GET - ?province=Oshima -> "http:localhost:1234/api/figures?province=oshima"
memesRouter.get("/:id", MemesController.readMemeById); // read - getFigureById - GET
memesRouter.post("/", validatorAuth, MemesController.createNewMeme ); // create - createFigure - POST - NECESITA LOGGEARSE
memesRouter.patch("/:id"); // update - updateFigure - PATCH - NECESITA LOGGEARSE
memesRouter.delete("/:id"); // delete - deleteFigure - DELETE - NECESITA LOGGEARSE
memesRouter.get("/top5"); //!read agregado por mi para mostrar una tabla con top 5
//VER COMO HACER LOS LIKES Y LOS DISLIKES
export default memesRouter;
