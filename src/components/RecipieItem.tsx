import Recipies from "../models/Recipies";
import "./RecipieItem.css";

interface Props {
  item: Recipies;
}

const RecipieItem = ({ item }: Props) => {
  return <div className="RecipieItem"></div>;
};

export default RecipieItem;
