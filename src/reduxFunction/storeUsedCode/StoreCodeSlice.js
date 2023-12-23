import {
    createSlice,
    nanoid
} from "@reduxjs/toolkit";


const slices = createSlice({
    name: "codes",
    initialState: {
        codes: [],
        usedFonts: [],
        homeIDs: [],
        contactIDs: [],
        aboutIDs: [],
        authenticationIDs: []
    },
    reducers: {
        storeCodes: (state, action) => {
            console.log(action.payload.code)
            const ID = nanoid();

            const {
                css,
                html,
                js,
                type,
                name,
                slug
            } = action.payload.code;
            const pageName = action.payload.designPage;

            const codesObj = {
                id: ID,
                codeParams: {
                    html: html,
                    css: css,
                    js: js,
                    type: type,
                    name: name,
                    slug
                }
            }
            console.log(codesObj)

            if (pageName === 'home') {
                if (type === "page") {
                    // if alreay a webpage exist then clear cant allow to insert another
                    if (state.codes.length === 1) return;
                    state.codes.push(codesObj);
                    state.homeIDs.push(ID);
                } else if (type === "section") {
                    state.codes.push(codesObj);
                    state.homeIDs.push(ID);
                }
            } else if (pageName === 'about') {
                if (type === "page") {
                    // if alreay a webpage exist then clear cant allow to insert another
                    if (state.codes.length === 1) return;
                    state.codes.push(codesObj);
                    state.aboutIDs.push(ID);
                } else if (type === "section") {
                    state.codes.push(codesObj);
                    state.aboutIDs.push(ID);
                }
            } else if (pageName === 'contact') {
                if (type === "page") {
                    // if alreay a webpage exist then clear cant allow to insert another
                    if (state.codes.length === 1) return;
                    state.codes.push(codesObj);
                    state.contactIDs.push(ID);
                } else if (type === "section") {
                    state.codes.push(codesObj);
                    state.contactIDs.push(ID);
                }
            } else if (pageName === 'login') {
                if (type === "page") {
                    // if alreay a webpage exist then clear cant allow to insert another
                    if (state.codes.length === 1) return;
                    state.codes.push(codesObj);
                    state.authenticationIDs.push(ID);
                }
            }
        },
        removeCode: (state, action) => {
            // it only does for the home pages
            state.homeIDs = state.homeIDs.filter(ids => ids !== action.payload.id)
            state.codes = state.codes.filter(code => code.id !== action.payload.id);
        },
        clearPreviousCodeOnDOM: (state, action) => {
            const length = state.codes.length;
            state.codes.splice(0, length);
        },
        storeFonts: (state, action) => {
            const fontsObj = {
                fontFamily: action.payload,
            }
            state.usedFonts = state.usedFonts.filter(font => font.fontFamily !== action.payload ? action.payload : "")
            state.usedFonts.push(fontsObj);
        },

    }
});

export const {
    storeCodes,
    removeCode,
    clearPreviousCodeOnDOM,
    storeFonts,
} = slices.actions;

export default slices.reducer;