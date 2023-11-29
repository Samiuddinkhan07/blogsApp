import config from "../../config/config";
import {Client,ID,Databases,Storage,Query, Account} from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;
    query;
    constructor(){
        this.client 
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImg,status,userId}){
        try {
           return  this.databases.createDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                }
            )
        } catch (error) {
            console.log("App write service create post err",error)
        }
    }

    async updatePost(slug,{title,content,featuredImg,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImg,
                    status,
                }
            )
        } catch (err) {
            console.log("App write Update post err",err)
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug
             )
             return true;
        } catch (error) {
            console.log("App Write delte post",error);
            return false;
        }
    }

    async getSinglePost(slug){
        try {
            return this.databases.getDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("App write get post ",error);
            return false
        }
    }

    async getAllPost(quries = [Query.equal('status',"active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDbId,
                config.appwriteCollectionId,
                quries,

            )
        } catch (error) {
            console.log("get all post err",error)
        }
    }

    // File upload service 

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("APP write upload err",error)
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId,
            ) 
            return true
        } catch (error) {
            console.log("App write delete",error)
        }

    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId,
        )
    }
}

const Service = new Service();

export default Service;
