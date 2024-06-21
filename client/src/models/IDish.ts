export interface IDish {
    id: string;
    imageUrl: string;
    name: string;
    categoryId: string;
    description: string;
    price: number;
    weightInGrams: number;
    nutritionalValue: {
        protein: number;
        fats: number;
        carbohydrates: number;
    }
}
