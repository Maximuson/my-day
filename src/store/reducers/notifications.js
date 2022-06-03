import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility.js";

// Notifications state
const initialState = {
  text: false,
  isError: true,
  isShow: false,
};

const showNotification = (state, action) => {
  return updateObject(state, {
    text: action.payload.text,
    isError: action.payload.isError,
    isShow: true,
  });
};

const hideNotification = (state, action) => {
    return updateObject(state, {
        text: "",
        isShow: false
    })
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_NOTIFICATION:
      return showNotification(state, action);
    case actionTypes.HIDE_NOTIFICATION:
      return hideNotification(state, action);
    default:
      return state;
  }
};

export default reducer;