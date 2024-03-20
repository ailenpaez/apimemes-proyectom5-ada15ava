import users from "../db/users.json";
import {writeFile} from "jsonfile";
import crypto from "crypto";

abstract class UserModel {

    private static findUser(username:string){
        return users.find((user)=>user.username === username)
    }
}


export {UserModel}