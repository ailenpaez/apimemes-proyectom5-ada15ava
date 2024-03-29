import memes from "../database/memes.json";
import { writeFile } from "jsonfile";
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

  static async getAllMemes() {
    const mappedMemes: any = memes.map((memes) => {
      const { likes, ...mappedMemes } = memes;
      return mappedMemes;
    });
    return mappedMemes;
  }

  static async readMemeById(id: string) {
    const meme = this.foundMeme(id);

    if (!meme) {
      return { error: "MEME_NOT_FOUND🤷🏻!" };
    }
    const { likes, ...shortInfo } = meme;
    return shortInfo;
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

    if (meme) return 409;
    memes.push(newMeme);

    await this.writeDbMemes();

    return newMeme.name;
  }

  static async updateMeme(memeData: any) {
    const { id, name, categories, author, imageUrl, memesParams } = memeData;

    const memeFound = this.foundMeme(memesParams);

    if (!memeFound) return { error: "MEME_NOT_FOUND!" };

    if (name) memeFound.name = name;
    if (categories) memeFound.categories = categories;
    if (author) memeFound.author = author;
    if (imageUrl) memeFound.imageUrl = imageUrl;
    if (id) memeFound.id = id;

    await this.writeDbMemes();
    return {
      message: "MEME_UPDATE_SUCCESSFULLY!",
      user: { name: memeFound.name, imageUrl: memeFound.imageUrl, id: id },
    };
  }

  static async deleteMeme(id: string) {
    const meme = this.foundMeme(id);

    if (!meme) return 404;

    const deleteMeme = memes.filter((meme) => meme.id !== id);

    await this.updateMemes(deleteMeme);

    return { message: "MEME_DELETED_SUCCESSFULLY!" };
  }
  
  static async addLike(id: string, username: string) {
    const meme = this.foundMeme(id);
    if (!meme) return { error: "MEME_NOT_FOUND!" };

    const likes = meme.likes as string[];

    if (likes.includes(username)) {
      return {
        message: "USER_ALREADY_LIKED",
        username: username,
        likesCount: likes.length,
      };
    }

    likes.push(username);
    await this.writeDbMemes();

    return {
      message: "LIKED_MEME_SUCCESS!",
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
    return mappedTop5Memes;
  }
}
export { MemesModel };
