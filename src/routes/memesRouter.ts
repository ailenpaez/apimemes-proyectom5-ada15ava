import { Router } from "express";
import { MemesController } from "../controller/memesController";
import { validatorAuth } from "../middleware/auth";

const memesRouter = Router();

memesRouter.get("/top5", MemesController.top5Memes);
memesRouter.get("/", MemesController.getAllMemes);
memesRouter.get("/:id", MemesController.readMemeById);
memesRouter.post("/", validatorAuth, MemesController.createNewMeme);
memesRouter.patch("/:id", validatorAuth, MemesController.updateMeme);
memesRouter.delete("/:id", validatorAuth, MemesController.deleteMeme);
memesRouter.patch("/:id/like", validatorAuth, MemesController.addLike);

export default memesRouter;
