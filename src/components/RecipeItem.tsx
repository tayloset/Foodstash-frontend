import { Link } from "react-router-dom";
import Recipe from "../models/Recipe";
import { getRecipeDetails } from "../services/FoodStashService";
import "./RecipeItem.css";

interface Props {
  recipe: Recipe;
}

const RecipeItem = ({ recipe }: Props) => {
  return (
    <div className="RecipeItem">
      <p>{recipe.title}</p>

      <Link to={`/recipe/${encodeURIComponent(recipe.id!)}`}>
        <img src={recipe.image} alt={recipe.imageType} />{" "}
      </Link>
      <i className="far fa-star"></i>
      <i className="fas fa-star"></i>
    </div>
  );
};

export default RecipeItem;
