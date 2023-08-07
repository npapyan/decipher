import { Db, MongoClient, ServerApiVersion } from "mongodb";
import { DB_USER, DB_PASS, DB_URI } from "@/app/lib/constant/secrets";

const DB_NAME = "Nutrition";
export const USDA_COLLECTION = "facts";
export const OPEN_FOOD_FACTS_COLLECTION = "openfoodfacts_data";
const uri = "mongodb+srv://" + DB_USER + ":" + DB_PASS + DB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

/**
 * Save jsonInput to collectionName
 * @param jsonInput - json object to save (must have _id field as upcId)
 * @param collectionName - name of collection to save to
 */
export async function saveToCollection(jsonInput: any, collectionName: string) {
  try {
    await client.connect();
    const myDB = client.db(DB_NAME);
    const myColl = myDB.collection(collectionName);
    const result = await myColl.insertOne(jsonInput);
  } finally {
    await client.close();
  }
}

/**
 *  Get food by upcId from collectionName
 * @param upcId - upcId of food to get (from barcode scan)
 * @param collectionName - name of collection to get from (varies depending on api used)
 * @returns - json object of food data
 */
export async function getFoodByUpcIdFromCollection(upcId: string, collectionName: string): Promise<any> {
  try {
    const query: any = { _id: upcId }
    await client.connect();
    const myDB = client.db(DB_NAME);
    const myColl = myDB.collection(collectionName);
    const result = await myColl.find(query).toArray();
    return result;
  } finally {
    await client.close();
  }
}
