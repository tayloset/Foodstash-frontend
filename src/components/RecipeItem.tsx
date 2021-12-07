import Recipe from "../models/Recipe";
import "./RecipeItem.css";

interface Props {
  recipe: Recipe;
}

const RecipeItem = ({ recipe }: Props) => {
  return (
    <div className="RecipeItem">
      <p>{recipe.title}</p>
      <img src={recipe.image} />
      <i className="far fa-star"></i>
      <i className="fas fa-star"></i>
    </div>
  );
};

export default RecipeItem;
