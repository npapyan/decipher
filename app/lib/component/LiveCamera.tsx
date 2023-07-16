'use client'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

export default function LiveCameraButton() {
    const Scanner = dynamic(() => import('./Scanner'), { ssr: false });
    const [foodData, setFoodData] = useState({
            brandName : "",
            description : "",
            ingredients : "",
            foodCategory : "",
            servingSize : "",
            servingSizeUnit : "",
            foodNutrients : [,],
    });

    const updateFoodData = (data: any) => {
        console.log(data);
        setFoodData(data);
    }

    return (
        <div>
            <Scanner setFoodData={updateFoodData} />
            {(foodData !== undefined && foodData !== null && foodData.brandName !== "") ? (
                <div className="text-center">
                    <h2 className="text-2xl">{foodData.brandName}</h2>
                    <h3 className="text-xl">{foodData.description}</h3>
                    <h3 className="text-xl italic">{foodData.foodCategory}</h3>
                    <br />
                    <div className="w-96 mx-auto flex-row text-center justify-center">
                        <div>
                            <h1 className="text-2xl">Nutrition Facts</h1>
                            <p>Serving Size {foodData.servingSize} {foodData.servingSizeUnit}</p>
                            <hr />
                        </div>
                        <div>
                            <div className="text-start">
                                {foodData.foodNutrients.map(nutrient => (
                                    <div>
                                        <p>
                                            {nutrient.nutrientName} {nutrient.value} {nutrient.unitName.toLowerCase()}
                                        </p>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}