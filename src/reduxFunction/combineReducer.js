import { configureStore, combineReducers } from '@reduxjs/toolkit';

import StorePageCode from "./StorePageCode/StorePageCode";
import StoreCodeSlice from "./storeUsedCode/StoreCodeSlice";
import pageControls from "./PageControls/pageControls";

// combine all the reducers to create a central state management
const rootReducer = combineReducers({
    StorePageCode,
    StoreCodeSlice,
    pageControls
})

export const store = configureStore({
    reducer: rootReducer,
});

export default rootReducer;