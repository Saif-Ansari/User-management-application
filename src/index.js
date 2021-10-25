import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer/usersReducer";
import rootSaga from "./sagas/user/index";
import "antd/dist/antd.css";

const sagaMiddleware = createSagaMiddleware();
const enhancers = [];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), ...enhancers)
);

sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
