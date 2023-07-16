import { NextResponse } from "next/server";
import { getNutritionFacts } from "../../NutritionApiService";

export async function GET(req, {params}) {
    const upcid = params.upcid;
    const jsonResponse = await getNutritionFacts(upcid);
    // TODO: Check for undefined or null
    return NextResponse.json(jsonResponse, {status : 200});
}