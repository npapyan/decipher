export default function Nutrition({foodData}) {
    return (
        <div className="text-center">
            <h2 className="text-2xl">{foodData.brandName}</h2>
            <h3 className="text-xl">{foodData.productName}</h3>
            <h3 className="text-xl italic">{foodData.categories}</h3>
            <br />
                <div className="w-96 mx-auto flex-row text-center justify-center">
                    <div>
                        <h1 className="text-2xl">Nutrition Facts</h1>
                        <p>Serving Size {foodData.servingSize}</p>
                        <hr />
                    </div>
                    <div>
                        <div className="text-start">
                            <p className="text-end">Total Fat: {foodData.foodNutrients.fat_serving ?? 0 } {foodData.foodNutrients.fat_unit}</p>
                            <p className="text-end">Cholesterol: {foodData.foodNutrients.cholesteral_serving ?? 0} {foodData.foodNutrients.cholesteral_unit}</p>
                            <p className="text-end">Sodium: {foodData.foodNutrients.sodium_serving ?? 0} {foodData.foodNutrients.sodium_unit}</p>
                            <p className="text-end">Total Carbohydrate: {foodData.foodNutrients.carbohydrates_serving ?? 0} {foodData.foodNutrients.carbohydrates_unit}</p>
                            <p className="text-end">Protein: {foodData.foodNutrients.proteins_serving ?? 0} {foodData.foodNutrients.proteins_unit}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}