import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Recipe from "../models/Recipe";
import "./RecipeItem.css";

interface Props {
  recipe: Recipe;
}

const RecipeItem = ({ recipe }: Props) => {
  const { profile, updateProfileHandler } = useContext(AuthContext);

  const favoritesToggle = () => {
    const updatedProfile: any = { ...profile };
    const isId = (element: string): boolean =>
      element === recipe.id!.toString();
    if (profile!.favorites.includes(recipe.id!.toString())) {
      updatedProfile.favorites.splice(
        updatedProfile.favorites.findIndex(isId),
        1
      );
    } else {
      updatedProfile.favorites.push(recipe.id!.toString());
    }
    delete updatedProfile._id;
    updateProfileHandler(updatedProfile);
  };

  return (
    <tr className="RecipeItem">
      <td className="imgTD">
        <Link to={`/recipe/${encodeURIComponent(recipe.id!)}`}>
          <img
            src={recipe.image}
            alt={recipe.imageType}
            className="recipeImage"
          />{" "}
        </Link>
      </td>
      <td className="titleTD">
        <Link to={`/recipe/${encodeURIComponent(recipe.id!)}`}>
          <h2 className="recipeTitle">{recipe.title}</h2>
        </Link>
      </td>
      <td className="starTD">
        {profile && (
          <>
            {profile!.favorites.includes(recipe.id!.toString()) ? (
              <i className="fas fa-star" onClick={favoritesToggle}></i>
            ) : (
              <i className="far fa-star" onClick={favoritesToggle}></i>
            )}
          </>
        )}
      </td>
    </tr>
  );
};

export default RecipeItem;
