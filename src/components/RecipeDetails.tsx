import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Details from "../models/Details";
import { getRecipeDetails } from "../services/FoodStashService";
import "./RecipeDetails.css";

interface RouteParams {
  id: string;
}

const RecipeDetails = () => {
  const [recipeDetails, setRecipeDetails] = useState<Details>();
  let id = useParams<RouteParams>().id;
  console.log(id);

  useEffect(() => {
    getRecipeDetails(parseInt(id)).then((response) => {
      setRecipeDetails(response);
    });
  }, [id]);

  return (
    <div className="Details">
      <h2>{recipeDetails?.title}</h2>
      <img src={recipeDetails?.image} alt={recipeDetails?.title} />
      <div className="typeCuisine">
        <ul className="dishType">
          <h3>Dish Type</h3>
          {recipeDetails?.dishTypes.map((item, index) => (
            <p key={`${item}${index}`}>{item}</p>
          ))}
        </ul>
        <ul className="cuisines">
          <h3>Cuisines</h3>
          {recipeDetails?.cuisines.map((item, index) => (
            <p key={`${item}${index}`}>{item}</p>
          ))}
        </ul>
      </div>

      <div className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          {recipeDetails?.extendedIngredients.map((item, index) => (
            <li key={`${item}${index}`}>{item.originalString}</li>
          ))}
        </ul>
      </div>

      <div className="extraInfo">
        <p>Ready in {recipeDetails?.readyInMinutes} minutes</p>
        <p>User Score: {recipeDetails?.spoonacularScore}</p>
        <p>Servings: {recipeDetails?.servings}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
