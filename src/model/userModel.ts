import users from "../db/users.json";
import { writeFile } from "jsonfile";
import crypto from "crypto";
import { dirname } from "../db/dirname";

abstract class UserModel {
  
  private static findUser(username: string){ //case sensitive
    return users.find((user) => user.username.toLowerCase() === username.toLowerCase());
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
      return { error: "USER_NOT_FOUND!" };
    }
    const { token, password, ...shortInfo } = user;
    return shortInfo;
  }
}

export { UserModel };
