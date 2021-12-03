import Recipes from "../models/Recipes";
import RecipeItem from "./RecipeItem";
import "./RecipeList.css";

interface Props {
  recipie: Recipes[];
}

const RecipeList = ({ recipie }: Props) => {
  return (
    <ul className="RecipieList">
      {recipie.map((item) => (
        <RecipeItem item={item} key={item?._id} />
      ))}
    </ul>
  );
};

export default RecipeList;
