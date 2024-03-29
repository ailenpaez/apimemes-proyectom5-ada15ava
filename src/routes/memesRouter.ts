import { Router } from "express";
import { MemesController } from "../controller/memesController";
import { validatorAuth } from "../middleware/auth";

const memesRouter = Router();

memesRouter.get("/top5", MemesController.top5Memes); //!read agregado por mi para top 5 de más likeados
memesRouter.get("/", MemesController.getAllMemes); 
memesRouter.get("/:id", MemesController.readMemeById); 
memesRouter.post("/", validatorAuth, MemesController.createNewMeme); //validaor
memesRouter.patch("/:id", validatorAuth, MemesController.updateMeme);  //validator
memesRouter.delete("/:id", validatorAuth, MemesController.deleteMeme); //validator
memesRouter.post("/:id/like", validatorAuth, MemesController.addLike); //validator


//VER COMO HACER LOS LIKES Y LOS DISLIKES
export default memesRouter;
