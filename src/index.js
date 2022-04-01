import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
// import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import configureAppStore from "./redux/configureStore";
import { RouterProvider } from "./utils/routeContext";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const store = configureAppStore();

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <RouterProvider>
          <App />
        </RouterProvider>
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);
