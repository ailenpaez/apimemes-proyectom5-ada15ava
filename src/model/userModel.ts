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

  static async createNewUser (dataUser: any){

    const {mail, username, hashedPass} = dataUser;

    const newUser = {mail, username, password: hashedPass , token: "", interests:[]}

    const user = this.findUser(username)

    if (user) return 409;
    users.push(newUser)

    await this.writeDbUser();

    return newUser.username
  }


}

// {
//   "mail": "usuario1@ejemplo.com",
//   "username": "Usuario1",
//   "password": "hashedPassword1",
//   "token": "token123",
//   "interests": ["Tecnología", "Programación", "Humor"]
// }

export { UserModel };
