/**
 * Map containing daily values (in grams) based on a 2000 calorie intake for Adults and children 4 years or more of age
 * Source: https://netrition.com/pages/reference-values-for-nutrition-labeling
 */
export const dailyValueAdultMap = new Map<string, number>([
    ["fat", 78],
    ["saturated_fat", 20],
    ["cholesterol", .3],
    ["total_carbohydrate", 275],
    ["sodium", 2.3],
    ["dietary_fiber", 28],
    ["protein", 50],
    ["added_sugar", 50],
])