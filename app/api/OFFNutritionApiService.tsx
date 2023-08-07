// Purpose: Service to get nutrition facts from OpenFoodFacts API
import { OPEN_FOOD_FACTS_COLLECTION, getFoodByUpcIdFromCollection, saveToCollection } from "./DbService";

const baseServiceUrl = 'https://world.openfoodfacts.org/api/v2/product/';
const urlEnd = '.json';

export async function getNutritionFacts(upcId: string): Promise<any> {
  console.log("UPC ID" + upcId);
  let data = await getNutritionFactsFromDb(upcId);
  if (data === undefined || data.length === 0) {
    const url = genUrlParams(upcId);
    console.log(url);
    let result = await fetch(url);
    data = await result.json();
    data = extractDataFromResults(data);
    if (data === undefined) {
      return undefined;
    }
    // TODO: Verify that this is the correct id
    data._id = upcId;
    saveNutritionFacts(data);
  }
  console.log(data);
  return data;
}

export async function getNutritionFactsFromDb(upcId: string): Promise<any> {
  return await getFoodByUpcIdFromCollection(upcId, OPEN_FOOD_FACTS_COLLECTION);
}

export async function saveNutritionFacts(jsonInput: any) {
  saveToCollection(jsonInput, OPEN_FOOD_FACTS_COLLECTION);
}

function genUrlParams(upcId: string) {
  return baseServiceUrl + upcId + urlEnd;
}

/**
 * Extracts only necessary data from the json response
 * @param jsonInput - json response from OpenFoodFacts API 
 * @returns - shortened json object with only necessary data
 */
function extractDataFromResults(jsonInput: any) {
  // TODO: Verify status code
  if (jsonInput.status == 0) {
    return undefined;
  }
  const formattedData: any = {};
  formattedData._id = jsonInput.product._id;
  formattedData.foodName = jsonInput.product.generic_name; // There's also generic_name_en
  formattedData.productName = jsonInput.product.product_name;
  formattedData.brandName = jsonInput.product.brands;
  formattedData.allergens = jsonInput.product.allergens_from_ingredients;
  formattedData.foodNutrients = jsonInput.product.nutriments;
  formattedData.categories = jsonInput.product.categories;
  formattedData.servingSize = jsonInput.product.serving_size;
  return formattedData;
}

function formatNutrientsFromResults(jsonInput: any) {
  // TODO: See if this is needed or if we can use data as is
  return jsonInput;
}
// TODO: Work on healthy/unhealthy nutrition tagger after front-end is complete
