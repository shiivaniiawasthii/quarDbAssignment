import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_LANGUAGE,
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_REQUEST,
  SET_APPLICATION
} from "./Type";
// import { signupSuccess,loginSuccess,logout } from "./Action";

const initialState = {
  user: null,
  isAuthenticated: false,
  application: null,
  jobs: [],
  selectedLanguage: "",

  selectedJob: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, selectedLanguage: action.payload };
    case FETCH_JOBS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_JOBS_SUCCESS:
      return { ...state, loading: false, jobs: action.payload };
    case FETCH_JOBS_FAILURE:
      return { ...state, loading: false, error: action.payload };
      case SET_APPLICATION:
        return { ...state, application: action.payload };
    default:
      return state;
  }
};
