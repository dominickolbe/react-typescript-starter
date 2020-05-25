import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { config } from "./components/store";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const store = createOvermind(config, { devtools: false });

ReactDOM.render(
  <React.StrictMode>
    <Provider value={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
