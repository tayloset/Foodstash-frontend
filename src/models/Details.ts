interface Ingredients {
  originalString: string;
}

export default interface Details {
  id?: number;
  title: string;
  image: string;
  dishTypes: string[];
  cuisines: string[];
  readyInMinutes: number;
  spoonacularScore: number;
  servings: number;
  extendedIngredients: Ingredients[];
}
