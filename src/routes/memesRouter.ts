import { Router } from "express";

const memesRouter = Router();

// memes

memesRouter.get("/"); //read - getAllFigures - GET - ?province=Oshima -> "http:localhost:1234/api/figures?province=oshima"
memesRouter.get("/:id"); // read - getFigureById - GET
memesRouter.post("/"); // create - createFigure - POST - NECESITA LOGGEARSE
memesRouter.patch("/:id"); // update - updateFigure - PATCH - NECESITA LOGGEARSE
memesRouter.delete("/:id"); // delete - deleteFigure - DELETE - NECESITA LOGGEARSE
