import { Router } from "express";
import { MemesController } from "../controller/memesController";
import { validatorAuth } from "../middleware/auth";

const memesRouter = Router();

memesRouter.get("/top5", MemesController.top5Memes); //!read agregado por mi para top 5 de más likeados
memesRouter.get("/", MemesController.getAllMemes); //read - getAllFigures - GET - ?province=Oshima -> "http:localhost:1234/api/figures?province=oshima"
memesRouter.get("/:id", MemesController.readMemeById); // read - getFigureById - GET
memesRouter.post("/", validatorAuth, MemesController.createNewMeme); // create - createFigure - POST - NECESITA LOGGEARSE
memesRouter.patch("/:id", validatorAuth, MemesController.updateMeme); // update - updateFigure - PATCH - NECESITA LOGGEARSE
memesRouter.delete("/:id", validatorAuth, MemesController.deleteMeme); // delete - deleteFigure - DELETE - NECESITA LOGGEARSE

//VER COMO HACER LOS LIKES Y LOS DISLIKES
export default memesRouter;
