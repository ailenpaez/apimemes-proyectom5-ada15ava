import { Request, Response } from "express";
import { MemesModel } from "../model/memesModel";

abstract class MemesController {
  public static getAllMemes = async (req: Request, res: Response) => {
    const data = await MemesModel.getAllMemes();
    res.json(data);
  };

  public static readMemeById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const meme = await MemesModel.readMemeById(id);
    if ("error" in meme) {
      res.status(404).json(meme);
    } else {
      res.json(meme);
    }
  };
}

export { MemesController };
