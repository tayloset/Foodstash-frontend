// import { useContext } from "react";
// import { useHistory } from "react-router";
import Recipe from "../models/Recipe";
import "./Favorites.css";
import RecipeItem from "./RecipeItem";

interface Props {
  recipes: Recipe[];
}

const Favorites = ({ recipes }: Props) => {
  // const history = useHistory();
  // const seeDetails = (id: string): void => {
  //   history.push(`/recipes/${encodeURIComponent(id)}/details`);
  // };
  // const {addFavorite, removeFavorite, isFav} = useContext(FavoritesContext)
  return (
    <ul className="Favorites">
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe?._id!} />
      ))}
    </ul>
  );
};

export default Favorites;
