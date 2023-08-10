import NutrientRow from "./NutrientRow";
import { dailyValueAdultMap } from "../service/DailyValueService";

export default function Nutrition({foodData}) {
    return (
        <div className="text-center pt-4">
            <h2 className="text-2xl">{foodData.brandName}</h2>
            <h3 className="text-xl">{foodData.productName}</h3>
            <h3 className="text-xl italic">{foodData.categories}</h3>
            <br />
                <div>
                    <div className="w-96 mx-auto flex-row text-center justify-center">
                        <h1 className="text-2xl">Nutrition Facts</h1>
                        <p>Serving Size {foodData.servingSize}</p>
                        <h2>Values are based off 100 grams of this product</h2>
                        <h2>Please input serving size here to recalculate: </h2>
                    </div>
                    <hr />
                    <div>
                        <div>
                            <NutrientRow nutrient={{name: 'Total Fat', value: foodData.foodNutrients.fat_100g, unit: foodData.foodNutrients.fat_unit, dailyValue: dailyValueAdultMap.get('fat')!, isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Cholesterol', value: foodData.foodNutrients.cholesteral_100g, unit: foodData.foodNutrients.cholesteral_unit, dailyValue: dailyValueAdultMap.get('cholesterol')!, isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Sodium', value: foodData.foodNutrients.sodium_100g, unit: foodData.foodNutrients.sodium_unit, dailyValue: dailyValueAdultMap.get('sodium')!,  isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Total Carbohydrate', value: foodData.foodNutrients.carbohydrates_100g, unit: foodData.foodNutrients.carbohydrates_unit, dailyValue: dailyValueAdultMap.get('total_carbohydrate')!,  isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Protein', value: foodData.foodNutrients.proteins_100g, unit: foodData.foodNutrients.proteins_unit, dailyValue: dailyValueAdultMap.get('protein')!,  isPrimary: true}}></NutrientRow>
                        </div>
                    </div>
                </div>
        </div>
    )
}