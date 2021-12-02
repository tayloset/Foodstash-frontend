import Recipies from "../models/Recipies";
import RecipieItem from "./RecipieItem";
import "./RecipieList.css";

interface Props {
  recipie: Recipies[];
}

const RecipieList = ({ recipie }: Props) => {
  return (
    <ul className="RecipieList">
      {recipie.map((item) => (
        <RecipieItem item={item} key={item?._id} />
      ))}
    </ul>
  );
};

export default RecipieList;
