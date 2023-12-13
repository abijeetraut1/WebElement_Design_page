import { createSlice } from "@reduxjs/toolkit";

const pageStorage = createSlice({
    name: "pages",
    initialState: {
        home: {},
        about: {},
        contact: {},
        authentication: {}
    },
    reducers: {
        storeHomePageCode: (state, action) => {
            const {
                code,
                section
            } = action.payload;

            if(!(action.payload.code)) return;

            // stores the codes in the section
            if (section === "home") {
                state.home = code;
            } else if (section === "about") {
                state.about = code;
            }else if(section === "contact"){
                state.contact = code;
            }else if(section === "login"){
                state.authentication = code;
            }
        }
    }
})

export const {
    storeHomePageCode
} = pageStorage.actions;

export default pageStorage.reducer;