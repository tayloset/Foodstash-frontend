import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Diet from "./components/Diet";
import Equipment from "./components/Equipment";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Search from "./components/Search";
import Intolerances from "./components/Intolerances";
import Navigation from "./components/Navigation";
import Pantry from "./components/Pantry";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Search />
          </Route>
          <Route path="/equipment" exact>
            <Equipment />
          </Route>
          <Route path="/pantry" exact>
            <Pantry />
          </Route>
          <Route path="/diet" exact>
            <Diet />
          </Route>
          <Route path="/intolerances" exact>
            <Intolerances />
          </Route>
          <Route path="/favorites" exact>
            <Favorites />
          </Route>
          <Route path="/recipe/:id" exact>
            <RecipeDetails />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
