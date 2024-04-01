import { Request, Response } from "express";
import { MemesModel } from "../model/memesModel";
import { validateMeme, validatePartialMeme } from "../validators/memeValidator";
import { randomUUID } from "crypto";
import { validatorAuth } from "../middleware/auth";

abstract class MemesController {
  public static getAllMemes = async (req: Request, res: Response) => {
    const data = await MemesModel.getAllMemes(req.query);
    res.json(data);
  };

  public static readMemeById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const response = await MemesModel.readMemeById(id);
    if (response.error) return res.status(404).json(response);
    res.json(response.message);
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
        author,
        categories: categories ?? [],
        imageUrl,
        likes: [""]
      };

      const response = await MemesModel.createNewMeme(newMeme);

      if (response.error)
        return res.status(409).json({ error: "THIS_MEME_EXISTS!🙈" });

      res.status(201).json({
        message: "MEME_CREATED_SUCCESSFULLY!👏🏽",
        id: generateId,
        name: response,
      });
    },
  ];

  public static updateMeme = [
    validatorAuth,
    async (req: Request, res: Response) => {
      const validate = validatePartialMeme(req.body);

      if (!validate.success)
        return res.status(404).json({ error: validate.error });

      const memeData = { memesParams: req.body.id, ...req.body };
      const response = await MemesModel.updateMeme(memeData);

      if (response.error) return res.status(400).json(response);

      res.status(201).json(response);
    },
  ];

  public static deleteMeme = [
    validatorAuth,
    async (req: Request, res: Response) => {
      const { id } = req.params;

      const response = await MemesModel.deleteMeme(id);

      if (response.error) return res.status(404).json(response);

      res.status(200).json(response);
    },
  ];

  public static addLike = [
    validatorAuth,
    async (req: Request, res: Response) => {
      const { id } = req.params;
      const { username } = req.body;

      const response = await MemesModel.addLike(id, username);
      if (response.error) return res.status(400).json(response);

      res.status(200).json(response);
    },
  ];

  public static top5Memes = async (req: Request, res: Response) => {
    const top5Memes = await MemesModel.top5Memes();
    res.json(top5Memes.message);
  };
}

export { MemesController };
