import { Link } from "react-router-dom";
import "./Navigation.css";
import Search from "../assets/Search.png";
import Pantry from "../assets/Pantry.png";
import Intolerances from "../assets/Intolerances.png";
import Equipment from "../assets/Equipment.png";
import Favorites from "../assets/Favorites.png";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <div className="Navigation">
      <div className="navContainer">
        <div className={`navLinks${path === "/" ? " selectedPath" : ""}`}>
          <Link to="/">
            <img src={Search} alt="Search" />
            <p>Search</p>
          </Link>
        </div>
        {user ? (
          <>
            <div
              className={`navLinks${path === "/pantry" ? " selectedPath" : ""}`}
            >
              <Link to="/pantry">
                <img src={Pantry} alt="Pantry" />
                <p>Pantry</p>
              </Link>
            </div>
            <div
              className={`navLinks${
                path === "/intolerances" ? " selectedPath" : ""
              }`}
            >
              <Link to="/intolerances">
                <img src={Intolerances} alt="Intolerances" />
                <p>Intolerances</p>
              </Link>
            </div>
            <div
              className={`navLinks${
                path === "/equipment" ? " selectedPath" : ""
              }`}
            >
              <Link to="/equipment">
                <img src={Equipment} alt="Equipment" />
                <p>Equipment</p>
              </Link>
            </div>
            <div
              className={`navLinks${
                path === "/favorites" ? " selectedPath" : ""
              }`}
            >
              <Link to="/favorites">
                <img src={Favorites} alt="Favorites" />
                <p>Favorites</p>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="notSignedInContainers signInParagraph">
              <h3>Sign-in to use these options!</h3>
            </div>
            <div className="notSignedInContainers">
              <img className="notSignedIn" src={Pantry} alt="Pantry" />
              <p>Pantry</p>
            </div>
            <div className="notSignedInContainers">
              <img
                className="notSignedIn"
                src={Intolerances}
                alt="Intolerances"
              />
              <p>Intolerances</p>
            </div>
            <div className="notSignedInContainers">
              <img className="notSignedIn" src={Equipment} alt="Equipment" />
              <p>Equipment</p>
            </div>
            <div className="notSignedInContainers">
              <img className="notSignedIn" src={Favorites} alt="Favorites" />
              <p>Favorites</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
