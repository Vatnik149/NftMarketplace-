import $api from "../http";
import {AxiosResponse} from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";

export default class CollectionService{
    static async fetchCollection(){
        return $api.get('/getcollections')
    }
    static async getUserCollection(iduser:string){
        return $api.post('/getusercollection', {iduser})
    }
    static getByNameCollection(names:string){
        return $api.post('/getCollectionByName', {names})
    }
   
}