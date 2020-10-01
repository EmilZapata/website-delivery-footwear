import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
import Pages from "./pages";
import "leaflet/dist/leaflet.css";
import "./styleGlobal.css";

import storeApp from "./redux";

let store = createStore(storeApp);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Pages />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
