export default interface Details {
  _id?: string;
  title: string;
  image: string;
  dishTypes: string[];
  cuisines: string[];
  readyInMinutes: number;
  spoonacularScore: number;
  servings: number;
}
