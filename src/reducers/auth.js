import * as types from "../actions/types";

const initialState = {
  token: localStorage.getItem('Authorization') || ''
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.SAVE_AUTH:
      return {
        ...state,
        token: payload
      };
    case types.WIPE_AUTH:
      return {
        ...state,
        token: ''
      };
    default:
      return state;
  }
}
