import { MongoClient } from "mongodb";

export async function MongoDBClient() {
    const client = new MongoClient(process.env.MONGODB_URI as string);
    //return the client to be used in Page()
    return client.connect().then(() => client);
}