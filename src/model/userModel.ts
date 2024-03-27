import users from "../database/users.json";
import { writeFile } from "jsonfile";
import crypto from "crypto";
import { dirname } from "../database/dirname";
import jsonfile from "jsonfile";

abstract class UserModel {
  private static findUser(username: string) {
    //case sensitive
    return users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );
  }

  private static async writeDbUser() {
    return writeFile(dirname + "/users.json", users);
  }

  private static async updateUsers(updateOrDelete: any[]) {
    return writeFile(dirname + "/users.json", updateOrDelete);
  }

  static async getAllUsers() {
    const mappedUsers: any = users.map((users) => {
      const { token, password, ...mappedUsers } = users; // destructuring, los ... -> operador de propagación (ADJUNTA PROP QUE SE)
      return mappedUsers;
    });
    return mappedUsers;
  }

  static async readUserByUsername(username: string) {
    const user = this.findUser(username);

    if (!user) {
      return { error: "USER_NOT_FOUND🤷🏻!" };
    }
    const { token, password, ...shortInfo } = user;
    return shortInfo;
  }

  static async createNewUser(dataUser: any) {
    const { mail, username, hashedPass, interests } = dataUser;

    const userInterests = interests ?? []; //OPERADOR DE NULIDAD ??
    const newUser = {
      mail,
      username,
      password: hashedPass,
      token: "",
      interests: userInterests,
    };

    const user = this.findUser(username);

    if (user) return 409;
    users.push(newUser);

    await this.writeDbUser();

    return newUser.username;
  }

  static async login(userData: any) {
    const { username, password } = userData;

    const userFound = this.findUser(username);

    if (!userFound) return 404;

    const hashPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    if (userFound.password !== hashPassword) return 400;

    const token = crypto.randomUUID();

    userFound.token = token;
    await this.writeDbUser();

    return token;
  }

  static async updateUser(userData: any) {
    const { mail, username, password, interests, usernameParam } = userData;

    const userFound = this.findUser(usernameParam);

    if (!userFound) return { error: "USER_NOT_FOUND!" };

    if (mail) userFound.mail = mail;
    if (username) userFound.username = username;
    if (password) userFound.password = password;
    if (interests) userFound.interests = interests;

    await this.writeDbUser();
    return {
      message: "USER_UPDATE_SUCCESSFULLY",
      user: { email: userFound.mail, username: userFound.username },
    };
  }

  static async logout(username: string) {
    const user = this.findUser(username);

    if (!user) return 404;

    user.token = "";

    await this.writeDbUser();

    return { message: "USER_LOGOUT!" };
  }

  static async deleteUser(username: string) {
    const user = this.findUser(username);

    if (!user) return 404;

    const deleteUser = users.filter((user) => user.username !== username);

    await this.updateUsers(deleteUser);

    return { message: "USER_DELETED_SUCCESSFULLY!" };
  }
}

export { UserModel };
