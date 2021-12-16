import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Recipe from "../models/Recipe";
import { searchByIds } from "../services/FoodStashService";
import "./Favorites.css";
import RecipeItem from "./RecipeItem";

const Favorites = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { profile } = useContext(AuthContext);

  useEffect(() => {
    if (profile) {
      searchByIds(profile!.favorites.toString()).then((data) => {
        setRecipes(data);
      });
    }
  }, [profile]);

  return (
    <table className="Favorites">
      {profile && (
        <>
          <tbody>
            {recipes.map((recipe) => (
              <RecipeItem recipe={recipe} key={recipe?.id!} />
            ))}
          </tbody>
        </>
      )}
    </table>
  );
};

export default Favorites;
