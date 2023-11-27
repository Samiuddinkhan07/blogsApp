import config from "../../config/config";
import { Client,ID,Account } from "appwrite";


export class AuthServices{
    client = new Client();
    account;

    constructor(){
        this.client
                .setEndpoint(config.appwriteUrl)
                .setProject(config.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password);
            if(userAccount){
                // call a method here
                this.userLogin({email,password})
            }
        }catch(err){
            throw err
        }
    };

    async userLogin({email,password}){
        try {
           return this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    };

    async isUserLogged(){
        try {
            return await this.account.get()
        } catch (err) {
            console.log("Current User" , err);
        }

        return null;
    }

    async userLogout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("User Logout Session",error)
        }

    }

};

const authService = new AuthServices();

export default authService