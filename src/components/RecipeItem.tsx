import Recipes from "../models/Recipe";
import "./RecipeItem.css";

interface Props {
  item: Recipes;
}

const RecipeItem = ({ item }: Props) => {
  return (
    <div className="RecipeItem">
      <i className="far fa-star"></i>
      <i className="fas fa-star"></i>
    </div>
  );
};

export default RecipeItem;
