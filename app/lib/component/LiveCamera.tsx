'use client'
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Nutrition from './nutrition/Nutrition';
import ZxingScanner from './scanner/ZxingScanner';

export default function LiveCameraButton() {
    const Scanner = dynamic(() => import('./scanner/ScanditScanner'), { ssr: false });
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
        setFoodData(data);
    }

    return (
        <div>
            <ZxingScanner setFoodData={updateFoodData}></ZxingScanner>
            {foodData.brandName !== "" ? ( 
                <Nutrition foodData={foodData} />
            ) : (
                <p className="text-center p-3">Please scan product</p>
            )}
        </div>
    )
}