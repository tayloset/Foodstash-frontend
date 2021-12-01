import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
