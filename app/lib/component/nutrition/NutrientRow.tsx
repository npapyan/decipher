type Nutrient = {
    name: string;
    value: number;
    unit: string;
    dailyValue: number;
    isPrimary: boolean;
}

interface NutrientProp {
    nutrient: Nutrient;
}

export default function NutrientRow({ nutrient }: NutrientProp) {
    // TODO: Display image of package if available in response
    // TODO: Display Ingredients if available
    const nutrientClass = nutrient.isPrimary ? "font-bold pr-1" : "pr-1 pl-2"
    const percentDailyValue = nutrient.value ? (nutrient.value/nutrient.dailyValue) * 100 : 0;
    return (
        <>
            <div className="py-2 flex flex-start justify-between">
                <div className="flex">
                    <p className={nutrientClass}>{nutrient.name}: </p>
                    <p>{nutrient.value ?? 0} {nutrient.unit}</p>
                </div>
                <div className="flex">
                    <p className="font-bold">{Math.round(percentDailyValue)}%</p>
                </div>
            </div>
            <hr />
        </>
    )
}