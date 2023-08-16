const numberRegex: RegExp = /\d+/;

// TODO: What happens when item is in ml or fl oz (drinks)
export default function ServingSize({servingSize, onValueChange}) {
    servingSize = extractServingSizeNum(servingSize);

    return (
        <p>Serving Size: <input className="text-black pl-2" type="text" placeholder="Values based on 100g if empty" value={servingSize} onChange={(e) => onValueChange(extractServingSizeNum(e.target.value))} /> g</p>
    );
}

export function extractServingSizeNum(servingSizeStr: string): number | null {
    if (servingSizeStr === null) {
        return 100;
    }
    let extractedNum: RegExpMatchArray | null = null;
    if (!isNaN(+servingSizeStr)) {
        return Number(servingSizeStr);
    } else {
        servingSizeStr = extractNumericValueWithParenthesis(servingSizeStr);
        extractedNum = servingSizeStr.match(numberRegex);
    }
    return extractedNum ? Number(extractedNum[0]) : null;
};

function extractNumericValueWithParenthesis(input: string) {
    let splitArr = input.split(" ");
    if (splitArr.length > 0) {
        return splitArr[splitArr.length-1];
    } else {
        return "100";
    }
}