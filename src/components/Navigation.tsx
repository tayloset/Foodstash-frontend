import { NavLink } from "react-router-dom";
import "./Navigation.css";
import Search from "../assets/Search.png";
import Pantry from "../assets/Pantry.png";
import Intolerances from "../assets/Intolerances.png";
import Equipment from "../assets/Equipment.png";
import Favorites from "../assets/Favorites.png";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="Navigation">
      <div className="navContainer">
        <div className="navLinks">
          <NavLink to="/search">
            <img src={Search} alt="Search" />
            <p>Search</p>
          </NavLink>
        </div>
        {user ? (
          <>
            <div className="navLinks">
              <NavLink to="/pantry">
                <img src={Pantry} alt="Pantry" />
                <p>Pantry</p>
              </NavLink>
            </div>
            <div className="navLinks">
              <NavLink to="/intolerances">
                <img src={Intolerances} alt="Intolerances" />
                <p>Intolerances</p>
              </NavLink>
            </div>
            <div className="navLinks">
              <NavLink to="/equipment">
                <img src={Equipment} alt="Equipment" />
                <p>Equipment</p>
              </NavLink>
            </div>
            <div className="navLinks">
              <NavLink to="/favorites">
                <img src={Favorites} alt="Favorites" />
                <p>Favorites</p>
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div className="notSignedInContainers navLinks">
              <div className="pseudoNav signInParagraph">
                <h3>Sign-in to use these options!</h3>
              </div>
            </div>
            <div className="notSignedInContainers navLinks">
              <div className="pseudoNav">
                <img className="notSignedIn" src={Pantry} alt="Pantry" />
                <p>Pantry</p>
              </div>
            </div>
            <div className="notSignedInContainers navLinks">
              <div className="pseudoNav">
                <img
                  className="notSignedIn"
                  src={Intolerances}
                  alt="Intolerances"
                />
                <p>Intolerances</p>
              </div>
            </div>
            <div className="notSignedInContainers navLinks">
              <div className="pseudoNav">
                <img className="notSignedIn" src={Equipment} alt="Equipment" />
                <p>Equipment</p>
              </div>
            </div>
            <div className="notSignedInContainers navLinks">
              <div className="pseudoNav">
                <img className="notSignedIn" src={Favorites} alt="Favorites" />
                <p>Favorites</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
