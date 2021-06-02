import {
  LOGIN_SUCCESS,
  REGISTRATION_SUCCESS,
  GET_ERRORS,
  AUTH_ERROR,
  LOADED_USERNAME,
  REFRESH_TOKEN,
  UPDATED_USER,
  FINISHED,
  LOGOUT,
  WELCOME,
} from "../actions/Types";
import { UPDATE_PASSWORD } from "../actions/modalTypes";

const initalState = {
  token: localStorage.getItem("token"),
  welcomeStorage: localStorage.getItem("welcomeStorage"),
  isAuthenticated: false,
  registeredSuccessful: false,
  isLoading: true,
  updatedSuccess: false,
  user: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };

    case WELCOME:
      localStorage.setItem("welcomeStorage", "Welcome");
      return {
        ...state,
      };

    case FINISHED:
      return {
        ...state,
        updatedSuccess: false,
      };

    case UPDATE_PASSWORD:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        isLoading: true,
        updatedSuccess: true,
      };

    case REFRESH_TOKEN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        user: action.payload.user,
      };

    case UPDATED_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        isLoading: true,
        updatedSuccess: true,
      };

    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case GET_ERRORS:
      return {
        registeredSuccessful: false,
      };

    case LOADED_USERNAME:
      return {
        ...state,
        ...action.payload,
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        isLoading: true,
      };

    case REGISTRATION_SUCCESS:
      return {
        registeredSuccessful: true,
      };

    default:
      return state;
  }
}
