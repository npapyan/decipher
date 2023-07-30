import { NextResponse } from "next/server";
import { getNutritionFacts } from "../../OFFNutritionApiService";

export async function GET(req, {params}) {
    const upcid = params.upcid;
    const jsonResponse = await getNutritionFacts(upcid);
    console.log(jsonResponse);
    // TODO: Check for undefined or null
    return NextResponse.json(jsonResponse, {status : 200});
}