import "./App.css";
import Lobby from "./component/lobby/Lobby";
import Information from "./component/information/Information";
import GameBoard from "./component/game/Gameboard";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <header className="main-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <h1>Guess Who?</h1>
              <div className="selection">
                <Link to="/play" className="button play">
                  Play
                </Link>
                <Link to="/info" className="button info">
                  Info
                </Link>
              </div>
            </Route>
            <Route exact path="/play">
              <Lobby />
            </Route>
            <Route exact path="/info">
              <Information />
            </Route>
            <Route exact path="/play/:id">
              <GameBoard />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
