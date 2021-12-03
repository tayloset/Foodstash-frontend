import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Diet from "./components/Diet";
import Equipment from "./components/Equipment";
import Header from "./components/Header";
import Intolerances from "./components/Intolerances";
import Pantry from "./components/Pantry";
import Search from "./components/Search";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
