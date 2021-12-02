import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Diet from "./components/Diet";
import Header from "./components/Header";
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
          <Route path="/diet" exact>
            <Diet />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
