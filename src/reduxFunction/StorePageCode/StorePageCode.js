import {
    createSlice,
    // nanoid
} from "@reduxjs/toolkit";

const pageStorage = createSlice({
    name: "pages",
    initialState: {
        home: [],
        // about: [],
        // contact: [],
        // login: []
    },
    reducers: {
        storeHomePageCode: (state, action) => {
            console.log(action.payload)
        }
    }
})

export const {
    storeHomePageCode
} = pageStorage.actions;

export default pageStorage.reducer;