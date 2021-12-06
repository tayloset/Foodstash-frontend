import Recipes from "../models/Recipe";
import "./RecipeItem.css";

interface Props {
  item: Recipes;
}

const RecipeItem = ({ item }: Props) => {
  return <div className="RecipeItem"></div>;
};

export default RecipeItem;
