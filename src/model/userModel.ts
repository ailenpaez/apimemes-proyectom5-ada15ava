import users from "../db/users.json";
import { writeFile } from "jsonfile";
import crypto from "crypto";
import { dirname } from "../db/dirname";

abstract class UserModel {
  static async getAllUsers() {
    const mappedUsers: any = users.map((users) => {
      const { token, password, ...mappedUsers } = users; // destructuring, los ... -> operador de propagación (ADJUNTA PROP QUE SE MUESTRAN)
          return mappedUsers;
    });
    return mappedUsers;
  }
}

export { UserModel };
