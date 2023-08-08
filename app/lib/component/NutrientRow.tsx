type Nutrient = {
    name: string;
    value: number;
    unit: string;
    isPrimary: boolean;
}

interface NutrientProp {
    nutrient: Nutrient;
}

export default function NutrientRow({ nutrient }: NutrientProp) {
    const nutrientClass = nutrient.isPrimary ? "font-bold pr-1" : "pr-1 pl-2"
    return (
        <>
            <div className="py-2 flex flex-start justify-between">
                <div className="flex">
                    <p className={nutrientClass}>{nutrient.name}: </p>
                    <p>{nutrient.value ?? 0} {nutrient.unit}</p>
                </div>
                <div className="flex">
                    <p className="font-bold">1%</p>
                </div>
            </div>
            <hr />
        </>
    )
}