import Recipe from "../models/Recipe";
import "./RecipeItem.css";

interface Props {
  recipe: Recipe;
  key: number;
}

const RecipeItem = ({ recipe, key }: Props) => {
  return (
    <div className="RecipeItem" key={key}>
      <p>{recipe.title}</p>
      <img src={recipe.image} alt={recipe.imageType} />
      <i className="far fa-star"></i>
      <i className="fas fa-star"></i>
    </div>
  );
};

export default RecipeItem;
