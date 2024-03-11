import $api from "../http";
import {AxiosResponse} from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";

export default class UserService{
    static async fetchUsers():Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/users')
    }
    static async getOneUser(iduser:string){
        return $api.post<IUser>('/getOneuser', {iduser})
    }
   static async followUser(iduser:number, idfollow:number){
    return $api.post('/followuser', {iduser, idfollow})
   }
   static async deleteFollowUser(iduser:number, idfollow:number){
    return $api.post('/deletefollow', {iduser, idfollow})
   }
   static async getFollowUser(iduser:number, idfollow:number){
    return $api.post('/getuserfollow', {iduser, idfollow})
   }
}