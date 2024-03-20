import users from "../db/users.json";
import { writeFile } from "jsonfile";
import crypto from "crypto";
import { dirname } from "../db/dirname";

abstract class UserModel {
  static async getAllUsers() {
    const mappedUsers: any = users.map((users) => {
      const { token, password, ...mappedUsers } = users; // destructuring, los ... -> operador de propagación (ADJUNTA PROP QUE SE)
      return mappedUsers;
    });
    return mappedUsers;
  }

  static async readUserByEmail(email: string) {
    const user = users.find((user) => user.mail === email);
    if (!user) {
      return { error: "USER_NOT_FOUND!" };
    }
    const { token, password, ...shortInfo } = user;
    return shortInfo;
  }
}

export { UserModel };
