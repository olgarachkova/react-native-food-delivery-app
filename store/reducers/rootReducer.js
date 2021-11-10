import { combineReducers } from "redux";
import { tabReducer } from "./tabReducer";

export const rootReducer = combineReducers({
    tab: tabReducer
});