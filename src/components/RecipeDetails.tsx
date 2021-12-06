import Details from "../models/Details";
import "./RecipeDetails.css";

interface Props {
  recipe: Details;
}

const Details = ({ recipe }: Props) => {
  return (
    <div className="Details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.dishTypes}</p>
      <p>{recipe.cuisines}</p>
      <div>
        <p>{recipe.readyInMinutes}</p>
        <p>{recipe.spoonacularScore}</p>
        <p>{recipe.servings}</p>
      </div>
    </div>
  );
};

export default Details;
