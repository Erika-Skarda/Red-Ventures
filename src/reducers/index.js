import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import plantsReducer from "./plantsReducer";
import loadingReducer from "./loadingReducer";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    plantsReducer: plantsReducer,
    loadingReducer
  });