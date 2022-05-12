import * as actionTypes from "./actionTypes";

/**
 *
 * @param {Object} payload
 * @param {string} payload.text
 * @param {boolean} payload.isError
 */
export const showNotifications = (payload) => {
  return {
    type: actionTypes.SHOW_NOTIFICATION,
    payload,
  };
};

export const hideNotifications = () => {
  return {
    type: actionTypes.HIDE_NOTIFICATION,
  };
};
