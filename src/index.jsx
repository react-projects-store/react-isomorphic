import App from "./App";
import ReactDOM from "react-dom";
import React from "react";
import getStore from "./getStore";
import { Provider } from "react-redux";

const store = getStore();
const fetchDataLocation = () => {
  store.dispatch({ type: "REQUEST_FETCH_QUESTIONS" });
};
const render = (_App) => {
  ReactDOM.render(
    <Provider store={store}>
      <_App />
    </Provider>,
    document.getElementById("AppContainer")
  );
};
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
render(App);
fetchDataLocation();
