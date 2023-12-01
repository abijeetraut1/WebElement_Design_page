import {configureStore} from "@reduxjs/toolkit";
import combineReducer from "../reduxFunction/combineReducer";

export const store = configureStore({
    reducer: combineReducer
}); 
