import Recipes from "../models/Recipe";
import "./Favorites.css";
import RecipeItem from "./RecipeItem";

interface Props {
  recipe: Recipes[];
}

const Favorites = ({ recipe }: Props) => {
  return (
    <ul className="Favorites">
      {recipe.map((item) => (
        <RecipeItem item={item} key={item?._id} />
      ))}
    </ul>
  );
};

export default Favorites;
