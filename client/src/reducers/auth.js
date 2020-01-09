import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
  //Token is stored in localstorage
  token: localStorage.getItem("token"),
  // Once user registers or logs in we will set isAuthenticated to true
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenicated: true,
        loading: false
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenicated: false,
        loading: false
      };

    default:
      return state;
  }
}
