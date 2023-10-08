// store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer, jobReducer } from "./Reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,

  jobs: jobReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
