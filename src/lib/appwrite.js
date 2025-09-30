import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('68dabe5c002a34d46789'); 

    export const account = new Account(client);
export const databases = new Databases(client);
export { client };