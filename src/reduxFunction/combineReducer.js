import { combineReducers } from "@reduxjs/toolkit";

import StorePageCode from "./StorePageCode/StorePageCode";
import StoreCodeSlice from "./storeUsedCode/StoreCodeSlice";
import pageControls from "./PageControls/pageControls";

// combine all the reducer to create a central state management
export default combineReducers({
    StorePageCode,
    StoreCodeSlice,
    pageControls
})