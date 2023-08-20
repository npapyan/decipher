type Nutrient = {
    name: string;
    value: number;
    unit: string;
    dailyValue: number;
    isPrimary: boolean;
    servingSize?: number | null;
    healthyRange?: number[];
}

interface NutrientProp {
    nutrient: Nutrient;
}

const defaultNutrientRatio = 100; // since all values are by default based on 100 grams

const nutrientValueGoodBg = "bg-lime-700";
const nutrientValueBadBg = "bg-red-700";

export default function NutrientRow({ nutrient }: NutrientProp) {
    let nutrientBgColor = '';
    if (nutrient.servingSize != null) {
        nutrient.value = (calcNutrientWithServingSize(nutrient.value, nutrient.servingSize));
    }
    const nutrientClass = nutrient.isPrimary ? "font-bold pr-1" : "pr-1 pl-2"
    const percentDailyValue = nutrient.value ? (nutrient.value/nutrient.dailyValue) * 100 : 0;
    if (percentDailyValue < 5) {
        nutrientBgColor = nutrientValueGoodBg;
    } else if (percentDailyValue > 20) {
        nutrientBgColor = nutrientValueBadBg;
    }

    return (
        <>
            <div className={`py-2 flex flex-start justify-between ${nutrientBgColor}`}>
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

function calcNutrientWithServingSize(nutrientValue: number, servingSize: number): number {
    return Math.round((nutrientValue * servingSize) / defaultNutrientRatio);
}