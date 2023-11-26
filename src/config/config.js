const config = {
    appwriteUrl:String(import.meta.VITE_APPWRITE_URL);
    appwriteProjectId:String(import.meta.VITE_APPWRITE_PROJECT_ID);
    appwriteDbId:String(import.meta.VITE_APPWRITE_DB_ID);
    appwriteCollectionId:String(import.meta.VITE_APPWRITE_COLLECTION_ID);
    appwriteBucketId:String(import.meta.VITE_APPWRITE_BUCKET_ID);
};

export default config;