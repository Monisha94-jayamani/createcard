import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Agent from "./Agent";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/agent">Agent</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/agent" component={Agent} />

          <Route path="/contact">
            <h1>Contact Component</h1>
          </Route>
          <Route path="/tickets">
            <h1>Tickets Component</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
