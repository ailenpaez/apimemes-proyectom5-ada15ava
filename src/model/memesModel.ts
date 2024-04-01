import memes from "../database/memes.json";
import { writeFile, readFile } from "jsonfile";
import { dirname } from "../database/dirname";

abstract class MemesModel {
  private static foundMeme(id: string) {
    return memes.find((meme) => meme.id === id);
  }

  private static async writeDbMemes() {
    return writeFile(dirname + "/memes.json", memes);
  }

  private static async updateMemes(updateOrDeleteMeme: any[]) {
    return writeFile(dirname + "/memes.json", updateOrDeleteMeme);
  }

  static async getAllMemes(query: any) {
    const { author } = query;

    if (author) {
      const memesByAuthor = memes.filter((meme: any) => meme.author === author);
      return memesByAuthor.map((meme: any) => {
        const { likes, ...mappedMeme } = meme;
        return mappedMeme;
      });
    }

    const mappedMemes: any = memes.map((meme: any) => {
      const { likes, ...mappedMeme } = meme;
      return mappedMeme;
    });
    return mappedMemes;
  }

  static async readMemeById(id: string) {
    const meme = this.foundMeme(id);

    if (!meme) return { error: "MEME_NOT_FOUND🤷🏻!" };
    const { likes, ...shortInfo } = meme;
    return { message: shortInfo };
  }

  static async createNewMeme(dataMeme: any) {
    const { id, name, categories, author, imageUrl, likes } = dataMeme;

    const memeCategories = categories ?? [];
    const likesArray = likes ?? [];

    const newMeme = {
      id,
      name,
      categories: memeCategories,
      author,
      imageUrl,
      likes: likesArray,
    };

    const meme = this.foundMeme(name);

    if (meme) return { error: "THIS_MEME_EXISTS!" };
    memes.push(newMeme);

    await this.writeDbMemes();

    return { message: newMeme.name };
  }

  static async updateMeme(memeData: any) {
    const { id, name, categories, author, imageUrl, memesParams } = memeData;

    const memeFound = this.foundMeme(memesParams);

    if (!memeFound) return { error: "MEME_NOT_FOUND🙅🏻‍♂️!" };

    if (name) memeFound.name = name;
    if (categories) memeFound.categories = categories;
    if (author) memeFound.author = author;
    if (imageUrl) memeFound.imageUrl = imageUrl;
    if (id) memeFound.id = id;

    await this.writeDbMemes();
    return {
      message: "MEME_UPDATE_SUCCESSFULLY💁🏼‍♂️!",
      user: { name: memeFound.name, imageUrl: memeFound.imageUrl, id: id },
    };
  }

  static async deleteMeme(id: string) {
    const meme = this.foundMeme(id);

    if (!meme) return { error: "MEME_NOT_FOUND" };

    const deleteMeme = memes.filter((meme) => meme.id !== id);

    await this.updateMemes(deleteMeme);

    return { message: "MEME_DELETED_SUCCESSFULLY🙆🏽‍♀️!", id: id };
  }

  static async addLike(id: string, username: string) {
    const meme = this.foundMeme(id);
    if (!meme) return { error: "MEME_NOT_FOUND🤦🏽‍♂️!" };

    const likes = meme.likes as string[];

    if (likes.includes(username))
      return {
        message: "USER_ALREADY_LIKED🙆🏽‍♂️",
        username: username,
        likesCount: likes.length,
      };

    likes.push(username);
    await this.writeDbMemes();

    return {
      message: "LIKED_MEME_SUCCESS👍🏽!",
      username: username,
      likesCount: likes.length,
    };
  }

  static async top5Memes() {
    const top5 = memes
      .sort((a, b) => b.likes.length - a.likes.length)
      .slice(0, 5);

    const mappedTop5Memes = top5.map((meme, index) => ({
      rank: index + 1,
      name: meme.name,
      likes: meme.likes.length,
    }));
    return { message: mappedTop5Memes };
  }
}
export { MemesModel };
