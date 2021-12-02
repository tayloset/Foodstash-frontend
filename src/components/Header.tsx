import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1>Foodstash</h1>
      {/* {user ? (
        <div>
          <p>{user.displayName}</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )} */}
    </header>
  );
};

export default Header;
