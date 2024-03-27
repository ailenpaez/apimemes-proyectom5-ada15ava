import memes from "../database/memes.json";
import { writeFile } from "jsonfile";
import { dirname } from "../database/dirname";
import crypto from "crypto";
import jsonfile from "jsonfile";

abstract class MemesModel {
  private static findMeme(id: string) {
    return memes.find((meme) => meme.id === id);
  }

  private static async writeDbMemes() {
    return writeFile(dirname + "/memes.json", memes);
  }

  private static async updateMemes(updateOrDeleteMeme: any[]) {
    return writeFile(dirname + "/memes.json", updateOrDeleteMeme);
  }

  static async getAllMemes() {
    const mappedMemes: any = memes.map((memes) => {
      const { likes, dislikes, ...mappedMemes } = memes;
      return mappedMemes;
    });
    return mappedMemes;
  }

  static async readMemeById(id: string) {
    const meme = this.findMeme(id);

    if (!meme) {
      return { error: "MEME_NOT_FOUND🤷🏻!" };
    }
    const { likes, dislikes, ...shortInfo } = meme;
    return shortInfo;
  }

  static async createNewMeme(dataMeme: any) {
    const { id, name, categories, author, imageUrl, likes, dislikes } =
      dataMeme;

    const memeCategories = categories ?? [];

    const newMeme = {
      id,
      name,
      categories: memeCategories,
      author,
      imageUrl,
      likes: "",
      dislikes: "",
    };

    const meme = this.findMeme(name);

    if (meme) return 409;
    memes.push(newMeme);

    await this.writeDbMemes();

    return newMeme.name;
  }
}

export { MemesModel };

/*
  {
    "id": "",
    "name": "",
    "categories": [],
    "author": "",
    "imageUrl": "",
    "likes": "",
    "dislikes": ""
  }
 */
