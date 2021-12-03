import { Link } from "react-router-dom";
import "./Navigation.css";
import Search from "../assets/Search.png";
import Pantry from "../assets/Pantry.png";
import Diet from "../assets/Diet.png";
import Intolerances from "../assets/Intolerances.png";
import Equipment from "../assets/Equipment.png";
import Favorites from "../assets/Favorites.png";
//comment
const Navigation = () => {
  return (
    <div className="Navigation">
      <Link to="/">
        <img src={Search} />
        <p>Search</p>
      </Link>
      <Link to="/pantry">
        <img src={Pantry} />
        <p>Pantry</p>
      </Link>
      <Link to="/diet">
        <img src={Diet} />
        <p>Diet</p>
      </Link>
      <Link to="/intolerances">
        <img src={Intolerances} />
        <p>Intolerances</p>
      </Link>
      <Link to="/equipment">
        <img src={Equipment} />
        <p>Equipment</p>
      </Link>
      <Link to="/favorites">
        <img src={Favorites} />
        <p>Favorites</p>
      </Link>
    </div>
  );
};

export default Navigation;
