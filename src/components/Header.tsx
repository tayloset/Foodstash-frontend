import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";
import Logo from "../assets/Logo.png";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <header className="Header">
      <img src={Logo} alt="Logo" className="logo" />
      <Link to="/">
        <h1>Foodstash</h1>
      </Link>
      {user ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </header>
  );
};

export default Header;
