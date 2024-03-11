import $api from "../http";
import {AxiosResponse} from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";

export default class CreatorService{
    static async topCreators(){
        return $api.get('/topcreators')
    }
    static async topCreatorsWeek(){
        return $api.get('/topcreatorsweek')
    }
    static async topCreatorsToday(){
        return $api.get('/topcreatorstoday')
    }
    static async topCreatorsMonth(){
        return $api.get('/topcreatorsmonth')
    }
}