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
    // const [calculatedCalories, setCalculatedCalories] = useState(calories.calorieNumVal);

    // TODO: Add useState to automatically update calorie value based on serving size
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
    console.log("MATH: " + calories + " * " + servingSize );
    return Math.round((calories * servingSize) / defaultCalorieRatio);
}