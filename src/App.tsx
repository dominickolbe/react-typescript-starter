import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Start } from "./views/Start";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/start">
          <Start />
        </Route>
        <Route path="*">
          <Redirect to="/start" />
        </Route>
      </Switch>
    </Router>
  );
};
