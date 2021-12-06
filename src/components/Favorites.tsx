// import { useContext } from "react";
// import { useHistory } from "react-router";
import Recipes from "../models/Recipe";
import "./Favorites.css";
import RecipeItem from "./RecipeItem";

interface Props {
  recipe: Recipes[];
}

const Favorites = ({ recipe }: Props) => {
  // const history = useHistory();
  // const seeDetails = (id: string): void => {
  //   history.push(`/recipes/${encodeURIComponent(id)}/details`);
  // };
  // const {addFavorite, removeFavorite, isFav} = useContext(FavoritesContext)
  return (
    <ul className="Favorites">
      {recipe.map((item) => (
        <RecipeItem item={item} key={item?._id} />
      ))}
    </ul>
  );
};

export default Favorites;
