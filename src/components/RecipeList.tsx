import Recipes from "../models/Recipes";
import RecipeItem from "./RecipeItem";
import "./RecipeList.css";

interface Props {
  recipe: Recipes[];
}

const RecipeList = ({ recipe }: Props) => {
  return (
    <ul className="RecipieList">
      {recipe.map((item) => (
        <RecipeItem item={item} key={item?._id} />
      ))}
    </ul>
  );
};

export default RecipeList;
