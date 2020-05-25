import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useStore } from "./components/store";
import { Start } from "./views/Start";

export const App = () => {
  const store = useStore();
  const { state } = store;
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
      {/* DEBUGGING store */}
      <code>store: {JSON.stringify(state, null, 2)}</code>
    </Router>
  );
};
