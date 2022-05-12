import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

import rootReducer from "./reducers";

const inititalState = {};

let middleware;

if (process.env.NODE_ENV !== "production") {
  middleware = compose(applyMiddleware(thunk, logger));
} else {
  middleware = compose(applyMiddleware(thunk));
}

const store = createStore(rootReducer, inititalState, middleware);

export default store;
