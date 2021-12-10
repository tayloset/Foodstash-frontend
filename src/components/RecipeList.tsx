import Recipe from "../models/Recipe";
import RecipeItem from "./RecipeItem";
import "./RecipeList.css";

interface Props {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: Props) => {
  return (
    <table className="RecipeList">
      <tbody>
        {console.log(recipes)}
        {recipes.map((recipe) => (
          <RecipeItem recipe={recipe} key={recipe?.id!} />
        ))}
      </tbody>
    </table>
  );
};

export default RecipeList;
