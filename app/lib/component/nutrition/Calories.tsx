import { useState } from 'react';

type Calories = {
    calorieNumVal: number;
    servingSize: number | null;
}

interface CaloriesProp {
    calories: Calories;
}

const defaultCalorieRatio = 100;

export default function Calories({ calories }: CaloriesProp ) {
    // TODO: Fix serving size calc for initial render (shows as NaN because serving size is string)
    if (calories.servingSize != null) {
        calories.calorieNumVal = (calcCaloriesWithServingSize(calories.calorieNumVal, calories.servingSize));
        console.log("Serve size in calories: " + calories.calorieNumVal);
    }

    return (
        <>
            <div className="py-2 flex flex-row justify-between font-bold">
                <h1 className="text-3xl flex">Calories</h1>
                <h1 className="text-3xl flex">{calories.calorieNumVal}</h1>
            </div>
        </>
    );
}

function calcCaloriesWithServingSize(calories: number, servingSize: number): number {
    return Math.round((calories * servingSize) / defaultCalorieRatio);
}