import * as actionTypes from "./actionTypes";

export const setCalendarDate = (payload) => {
  return {
    type: actionTypes.SET_CALENDAR_DATE,
    payload,
  };
};
