import {
    createSlice,
    nanoid,
} from "@reduxjs/toolkit";

const slices = createSlice({
    name: "codes",
    initialState: {
        codes: [],
        usedFonts: [],
    },
    reducers: {
        storeCodes: (state, action) => {
            const {
                name,
                html,
                css,
                slug
            } = action.payload;
            const codesObj = {
                id: nanoid(),
                codeParams: {
                    name: name,
                    html: html,
                    css: css,
                    slug: slug
                }
            }
            state.codes.push(codesObj);
        },
        removeCode: (state, action) => {
            state.codes = state.codes.filter(code => code.id !== action.payload);
        },
        updateCode: (state, action) => {
            state.codes = state.codes.filter(code => code.id === action.payload.id ? code.codeParams.html = action.payload.html : code.codeParams.html);
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
    updateCode,
    storeFonts,
} = slices.actions;

export default slices.reducer;