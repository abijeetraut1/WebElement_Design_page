import {configureStore} from "@reduxjs/toolkit";
import slices from "../reduxFunction/storeUsedCode/StoreCodeSlice";

export const store = configureStore({
    reducer: slices
}); 