import RecipeInstructionsModel from "../models/RecipeInstructionsModel";
import "./RecipePartInstructions.css";

interface Props {
  part: RecipeInstructionsModel;
  recipeName: string;
  key: string;
}

const RecipePartInstructions = ({ part, recipeName, key }: Props) => {
  return (
    <li className="RecipeInstructions">
      {key ? <h3>{key}</h3> : <h3>{recipeName}</h3>}
      <ol>
        {part.steps.map((step, index) => (
          <li>{step.step}</li>
        ))}
      </ol>
    </li>
  );
};

export default RecipePartInstructions;
