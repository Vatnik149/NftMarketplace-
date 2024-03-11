import $api from "../http";
import {AxiosResponse} from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class MailService{
    static async sendMessage(email:string){
        return $api.post('/sendMail', {email})
    }
}