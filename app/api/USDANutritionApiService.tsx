// Purpose: Service to get nutrition facts from USDA API
import { USDA_COLLECTION, getFoodByUpcIdFromCollection, saveToCollection } from "./DbService";
import { USDA_FOOD_DATA_API_KEY } from "../lib/constant/secrets";

const baseServiceUrl = 'https://api.nal.usda.gov/fdc';
const queryEndpoint = '/v1/foods/search';
let paramMap = new Map();

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
        data._id = upcId;
        saveNutritionFacts(data);
    }
    console.log(data);
    return data;
}

export async function getNutritionFactsFromDb(upcId: string): Promise<any> {
    return await getFoodByUpcIdFromCollection(upcId, USDA_COLLECTION);
}

export async function saveNutritionFacts(jsonInput: any) {
    saveToCollection(jsonInput, USDA_COLLECTION);
}

function populateParamMap(upcId: string) {
    paramMap.set('api_key', USDA_FOOD_DATA_API_KEY);
    paramMap.set('query', upcId);
}

function genUrlParams(upcId: string) {
    populateParamMap(upcId);
    let params = '?';
    paramMap.forEach((value, key) => {
        params = params + (params === '?' ? '' : '&') + key + '=' + value;
    });
    return baseServiceUrl + queryEndpoint + params;
}

function extractDataFromResults(jsonInput: any) {
    if (jsonInput.foods.length == 0) {
        return undefined;
    }
    const formattedData = jsonInput.foods[0];
    delete formattedData.dataSource;
    delete formattedData.tradeChannels;
    delete formattedData.tradingChannels;
    delete formattedData.allHighlightFields;
    delete formattedData.microbes;
    delete formattedData.microbes;
    delete formattedData.finalFoodInputFoods
    delete formattedData.foodMeasures
    delete formattedData.foodAttributes
    delete formattedData.foodAttributeTypes
    delete formattedData.foodVersionIds
    return formattedData;
}

// TODO: Work on healthy/unhealthy nutrition tagger after front-end is complete