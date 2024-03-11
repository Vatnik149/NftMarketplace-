import $api from "../http";
import {AxiosResponse} from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";
import { INFTDATA } from "../models/INftData";

export default class NftService{
    static async fetchUsers(){
        return $api.get('/getnfts')
    }
    static async getUserNfts(iduser:string,){
        return $api.post('/getusernft', {iduser})
    }
    static getOneNft(idnft:string){
        return $api.post('/getonenft', {idnft})
    }
    static getByNameNft(names:string){
        return $api.post('/getNftByName', {names})
    }
   
}