import Recipe from "../models/Recipe";
import RecipeItem from "./RecipeItem";
import "./RecipeList.css";

interface Props {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: Props) => {
  return (
    <ul className="RecipeList">
      {console.log(recipes)}
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe?.id!} />
      ))}
    </ul>
  );
};

export default RecipeList;
