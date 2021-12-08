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
    searchByIds(profile!.favorites.toString()).then((data) => {
      setRecipes(data);
      console.log(recipes);
    });
  }, []);

  return (
    <ul className="Favorites">
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe?.id!} />
      ))}
    </ul>
  );
};

export default Favorites;
