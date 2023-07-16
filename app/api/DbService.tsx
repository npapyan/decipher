import { MongoClient, ServerApiVersion } from "mongodb";
import { DB_USER, DB_PASS, DB_URI } from "../lib/constant/secrets";
const uri = "mongodb+srv://" + DB_USER + ":" + DB_PASS + DB_URI; 

const client = new MongoClient( uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    } 
});

export async function save(jsonInput: any) {
    try {
        await client.connect();
        const myDB = client.db("Nutrition");
        const myColl = myDB.collection("facts");
        const result = await myColl.insertOne(jsonInput);
    } finally {
        await client.close();
    }
}

export async function getFoodByUpcId(upcId: string): Promise<any> {
    try {
        const query: any = {_id: upcId}
        await client.connect();
        const myDB = client.db("Nutrition");
        const myColl = myDB.collection("facts");
        const result = await myColl.find(query).toArray();
        return result;
    } finally {
        await client.close();
    }
}