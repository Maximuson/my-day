import notifications from "./notifications";

const { combineReducers } = require("redux");

const appReducer = combineReducers({ notifications: notifications });

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USER") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
