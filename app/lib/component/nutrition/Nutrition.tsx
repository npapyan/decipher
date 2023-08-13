import NutrientRow from "./NutrientRow";
import Calories from "./Calories";
import ServingSize from "./ServingSize";
import { dailyValueAdultMap } from "../../service/DailyValueService";
import { useState } from 'react';

export default function Nutrition({foodData}) {
    const [servingSizeValue, setServingSizeValue] = useState<number | null>(foodData.servingSize);

    const handleServingSizeChange = (newServingSize) => {
        setServingSizeValue(newServingSize);
    };

    return (
        <div className="text-center pt-4">
            <h2 className="text-2xl">{foodData.brandName}</h2>
            <h3 className="text-xl">{foodData.productName}</h3>
            <h3 className="text-xl italic">{foodData.categories}</h3>
            <br />
                <div>
                    <div className="w-96 mx-auto flex-row text-center justify-center py-4">
                        <h1 className="text-3xl font-bold py-2">Nutrition Facts</h1>
                        <ServingSize servingSize={servingSizeValue} onValueChange={handleServingSizeChange}></ServingSize>
                    </div>
                    <hr className="h-5 bg-white" />
                    <Calories calories={{calorieNumVal: Number(foodData.foodNutrients.energy_value), servingSize: servingSizeValue}} ></Calories>
                    <hr className="h-2 bg-white" />
                    <div>
                        <div>
                            <NutrientRow nutrient={{name: 'Total Fat', value: foodData.foodNutrients.fat_100g, unit: foodData.foodNutrients.fat_unit, dailyValue: dailyValueAdultMap.get('fat')!, isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Saturated Fat', value: foodData.foodNutrients['saturated-fat_100g'], unit: foodData.foodNutrients['saturated-fat_unit'], dailyValue: dailyValueAdultMap.get('saturated_fat')!, isPrimary: false}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Cholesterol', value: foodData.foodNutrients.cholesteral_100g, unit: foodData.foodNutrients.cholesteral_unit, dailyValue: dailyValueAdultMap.get('cholesterol')!, isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Sodium', value: foodData.foodNutrients.sodium_100g, unit: foodData.foodNutrients.sodium_unit, dailyValue: dailyValueAdultMap.get('sodium')!,  isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Total Carbohydrate', value: foodData.foodNutrients.carbohydrates_100g, unit: foodData.foodNutrients.carbohydrates_unit, dailyValue: dailyValueAdultMap.get('total_carbohydrate')!,  isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Total Sugars', value: foodData.foodNutrients.sugars_100g, unit: foodData.foodNutrients.sugars_unit, dailyValue: dailyValueAdultMap.get('added_sugar')!,  isPrimary: false}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Protein', value: foodData.foodNutrients.proteins_100g, unit: foodData.foodNutrients.proteins_unit, dailyValue: dailyValueAdultMap.get('protein')!,  isPrimary: true}}></NutrientRow>
                        </div>
                    </div>
                </div>
                <hr className="h-1 bg-white" />
        </div>
    )
}