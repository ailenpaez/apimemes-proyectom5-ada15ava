import { Request, Response } from "express";
import { MemesModel } from "../model/memesModel";
import { validateMeme, validatePartialMeme } from "../validators/memeValidator";
import { randomUUID } from "crypto";
import { validatorAuth } from "../middleware/auth";

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

  public static createNewMeme = [
    validatorAuth,
    async (req: Request, res: Response) => {
      const validate = validateMeme(req.body);
      if (!validate.success)
        return res.status(400).json({ error: "BAD_REQUEST😓" });

      const { name, categories, author, imageUrl } = req.body;

      const generateId = randomUUID();

      const newMeme = {
        id: generateId,
        name,
        categories: categories ?? [],
        imageUrl,
        likes: "",
        dislikes: "",
      };

      const response = await MemesModel.createNewMeme(newMeme);

      if (response === 409) {
        return res.status(409).json({ error: "THIS_MEME_EXISTS!🙈" });
      }

      res
        .status(201)
        .json({ message: "MEME_CREATED_SUCCESSFULLY!👏🏽", name: response });
    },
  ];

  public static updateMeme = [
    validatorAuth,
    async (req: Request, res: Response) => {
      const validate = validatePartialMeme(req.body);

      if (!validate.success) return res.status(404).json({ error: validate.error });

      const memeData = { memesParams: req.body.id, ...req.body };
      const response = await MemesModel.updateMeme(memeData);

      if (response.error) return res.status(400).json(response);

      res.status(201).json(response);
    },
  ];

}

export { MemesController };
