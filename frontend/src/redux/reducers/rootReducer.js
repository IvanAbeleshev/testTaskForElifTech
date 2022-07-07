import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { navigationReducer } from "./navigationReducer";

export const rootReducer = combineReducers(
    {
        navigation: navigationReducer,
        basket: basketReducer,
    });