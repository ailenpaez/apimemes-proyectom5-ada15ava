import { Request, Response } from "express";
import { MemesModel } from "../model/memesModel";

abstract class MemesController {
    public static getAllMemes = async (req: Request, res: Response) => {
      const data = await MemesModel.getAllMemes();
      res.json(data);
    };
}

export {MemesController}