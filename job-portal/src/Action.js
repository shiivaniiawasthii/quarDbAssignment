import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  SET_LANGUAGE,
  SET_APPLICATION,
} from "./Type";
import axios from "axios";

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
  payload: "",
});
export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error,
});

export const setApplication = (application) => ({
  type: SET_APPLICATION,
  payload: application,
});

export const fetchJobs = (selectedLanguage) => {
  console.log(selectedLanguage, "input");
  return async (dispatch) => {
    dispatch(fetchJobsRequest());

    try {
      const response = await axios.get(
        `https://jsonserver-mm0q.onrender.com/api/jobs?language=${selectedLanguage}`
      );

      dispatch(fetchJobsSuccess(response.data));
    } catch (error) {
      dispatch(fetchJobsFailure(error.message));
    }
  };
};
