import notifications from "./notifications";
import calendar from "./calendar"

const { combineReducers } = require("redux");

const appReducer = combineReducers({ notifications: notifications, calendar: calendar });

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USER") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
