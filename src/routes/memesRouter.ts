import { Router } from "express";
import { MemesController } from "../controller/memesController";

const memesRouter = Router();

// memes

memesRouter.get("/", MemesController.getAllMemes); //read - getAllFigures - GET - ?province=Oshima -> "http:localhost:1234/api/figures?province=oshima"
memesRouter.get("/:id"); // read - getFigureById - GET
memesRouter.post("/"); // create - createFigure - POST - NECESITA LOGGEARSE
memesRouter.patch("/:id"); // update - updateFigure - PATCH - NECESITA LOGGEARSE
memesRouter.delete("/:id"); // delete - deleteFigure - DELETE - NECESITA LOGGEARSE
memesRouter.get("/top10"); //!read agregado por mi para mostrar una tabla con top 10

export default memesRouter;
