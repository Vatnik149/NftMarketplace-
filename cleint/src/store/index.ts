import { IUser } from "../models/IUser";
import {makeAutoObservable} from "mobx"
import AuthService from "../service/AuthService";
import { AuthResponse } from "../models/response/AuthResponse";
import axios from 'axios';

export default class Store{
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    searchValue = '';

    constructor(){
        makeAutoObservable(this)    
    }
    setAuth(bool:boolean){
        this.isAuth = bool;
    }
    setUser(user:IUser){
        this.user = user;
    }
    setLoading(bool:boolean){
        this.isLoading = bool;
    }
    setSearchValue(value:string){
        this.searchValue = value;
    }
    
    async login(email: string, password:string){
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user)
            console.log(response.data.user);
            console.log(this.isAuth);
        } catch (error) {
            console.log(error)
        }
    }
    async registration(email: string, password:string, username:string){
        try {
            const response = await AuthService.registration(email, password, username);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error)
        }
    }
    // async logout(){
    //     try {
    //         const response = await AuthService.logout();
    //         console.log(response);
    //         localStorage.removeItem('token');
    //         this.setAuth(false);
    //         this.setUser({} as IUser)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    async checkAuth(){
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`http://localhost:5000/api/refresh`, {withCredentials:true});
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            
        }
        finally{
            this.setLoading(false)
        }
    }
}