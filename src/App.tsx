import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useStore } from "./components/store";
import { theme, useStyles } from "./theme";
import { Start } from "./views/Start";

export const App = () => {
  const store = useStore();
  const { state } = store;
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
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
      </div>
    </ThemeProvider>
  );
};
