import NutrientRow from "./NutrientRow";

export default function Nutrition({foodData}) {
    let nutrientComponents = getNutrientComponents(foodData.foodNutrients);
    return (
        <div className="text-center pt-4">
            <h2 className="text-2xl">{foodData.brandName}</h2>
            <h3 className="text-xl">{foodData.productName}</h3>
            <h3 className="text-xl italic">{foodData.categories}</h3>
            <br />
                {/* <div className="w-96 mx-auto flex-row text-center justify-center"> */}
                <div>
                    <div className="w-96 mx-auto flex-row text-center justify-center">
                        <h1 className="text-2xl">Nutrition Facts</h1>
                        <p>Serving Size {foodData.servingSize}</p>
                    </div>
                    <hr />
                    <div>
                        <div className="">
                            <NutrientRow nutrient={{name: 'Total Fat', value: foodData.foodNutrients.fat_100g, unit: foodData.foodNutrients.fat_unit, isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Cholesterol', value: foodData.foodNutrients.cholesteral_100g, unit: foodData.foodNutrients.cholesteral_unit, isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Sodium', value: foodData.foodNutrients.sodium_100g, unit: foodData.foodNutrients.sodium_unit, isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Total Carbohydrate', value: foodData.foodNutrients.carbohydrates_100g, unit: foodData.foodNutrients.carbohydrates_unit, isPrimary: true}}></NutrientRow>
                            <NutrientRow nutrient={{name: 'Protein', value: foodData.foodNutrients.proteins_100g, unit: foodData.foodNutrients.proteins_unit, isPrimary: true}}></NutrientRow>
                        </div>
                    </div>
                </div>
        </div>
    )
}

function getNutrientComponents(foodNutrients: any) {


}