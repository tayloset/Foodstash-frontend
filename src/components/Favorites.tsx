import Recipies from "../models/Recipies";
import "./Favorites.css";
import RecipieItem from "./RecipieItem";

interface Props {
  recipie: Recipies[];
}

const Favorites = ({ recipie }: Props) => {
  return (
    <ul className="Favorites">
      {recipie.map((item) => (
        <RecipieItem item={item} key={item?._id} />
      ))}
    </ul>
  );
};

export default Favorites;
