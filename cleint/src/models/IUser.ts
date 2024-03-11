export interface IUser {
    iduser: number; // Assuming this is the equivalent of id in your SQL table
    username: string;
    email: string;
    password: string;
    bio?: string; 
    discordLink?: string; 
    website?: string; 
    youtube?: string;
    twitter?: string; 
    instagram?: string; 
    facebook?: string; 
    token: string; 
    avatar?: string; 
}