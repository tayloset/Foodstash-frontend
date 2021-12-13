import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AuthContext from "../context/AuthContext";
import Details from "../models/Details";
import {
  getRecipeDetails,
  getRecipeInstructions,
} from "../services/FoodStashService";
import "./RecipeDetails.css";
import RecipeInstructionsModel from "../models/RecipeInstructionsModel";
import RecipePartInstructions from "./RecipePartInstructions";

interface RouteParams {
  id: string;
}

const RecipeDetails = () => {
  const { profile, updateProfileHandler } = useContext(AuthContext);

  const favoritesToggle = () => {
    const updatedProfile: any = { ...profile };
    const isId = (element: string): boolean =>
      element === recipeDetails!?.id!.toString();
    if (profile!.favorites.includes(recipeDetails!?.id!.toString())) {
      updatedProfile.favorites.splice(
        updatedProfile.favorites.findIndex(isId),
        1
      );
    } else {
      updatedProfile.favorites.push(recipeDetails!?.id!.toString());
    }
    delete updatedProfile._id;
    updateProfileHandler(updatedProfile);
  };

  const [recipeDetails, setRecipeDetails] = useState<Details>();
  let id = useParams<RouteParams>().id;
  const [recipeInstructions, setRecipeInstructions] =
    useState<RecipeInstructionsModel[]>();

  useEffect(() => {
    getRecipeDetails(parseInt(id)).then((response) => {
      setRecipeDetails(response);
    });
    getRecipeInstructions(id).then((response) => {
      console.log(response);
      setRecipeInstructions(response);
    });
  }, [id]);

  return (
    <div className="Details">
      <h2>
        {recipeDetails?.title}{" "}
        <>
          {profile && (
            <>
              {profile!.favorites.includes(recipeDetails!?.id!.toString()) ? (
                <i className="fas fa-star" onClick={favoritesToggle}></i>
              ) : (
                <i className="far fa-star" onClick={favoritesToggle}></i>
              )}
            </>
          )}
        </>
      </h2>
      <img src={recipeDetails?.image} alt={recipeDetails?.title} />
      <div className="extraInfo">
        <p>Ready in {recipeDetails?.readyInMinutes} minutes</p>
        <p>User Score: {recipeDetails?.spoonacularScore}</p>
        <p>Servings: {recipeDetails?.servings}</p>
      </div>
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

      <div className="detailsContainer">
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipeDetails?.extendedIngredients.map((item, index) => (
              <li key={`${item}${index}`}>{item.originalString}</li>
            ))}
          </ul>
        </div>

        <ul className="instructions">
          <h2>Instructions</h2>
          {recipeInstructions?.map((part, index) => (
            <RecipePartInstructions
              recipeName={recipeDetails!?.title}
              part={part}
              key={recipeInstructions[index].name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
