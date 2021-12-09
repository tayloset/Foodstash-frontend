import { Link } from "react-router-dom";
import "./Navigation.css";
import Search from "../assets/Search.png";
import Pantry from "../assets/Pantry.png";
import Diet from "../assets/Diet.png";
import Intolerances from "../assets/Intolerances.png";
import Equipment from "../assets/Equipment.png";
import Favorites from "../assets/Favorites.png";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
//comment
const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="Navigation">
      <Link to="/">
        <img src={Search} alt="Search" />
        <p>Search</p>
      </Link>
      {user ? (
        <>
          <Link to="/pantry">
            <img src={Pantry} alt="Pantry" />
            <p>Pantry</p>
          </Link>
          {/* <Link to="/diet">
            <img src={Diet} alt="Diet" />
            <p>Diet</p>
          </Link> */}
          <Link to="/intolerances">
            <img src={Intolerances} alt="Intolerances" />
            <p>Intolerances</p>
          </Link>
          <Link to="/equipment">
            <img src={Equipment} alt="Equipment" />
            <p>Equipment</p>
          </Link>
          <Link to="/favorites">
            <img src={Favorites} alt="Favorites" />
            <p>Favorites</p>
          </Link>
        </>
      ) : (
        <>
          <h3>Sign-in to use these options!</h3>
          <div>
            <img className="notSignedIn" src={Pantry} alt="Pantry" />
            <p>Pantry</p>
          </div>
          {/* <img src={Diet} alt="Diet" />
          <p>Diet</p> */}
          <div>
            <img
              className="notSignedIn"
              src={Intolerances}
              alt="Intolerances"
            />
            <p>Intolerances</p>
          </div>
          <div>
            <img className="notSignedIn" src={Equipment} alt="Equipment" />
            <p>Equipment</p>
          </div>
          <div>
            <img className="notSignedIn" src={Favorites} alt="Favorites" />
            <p>Favorites</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Navigation;
