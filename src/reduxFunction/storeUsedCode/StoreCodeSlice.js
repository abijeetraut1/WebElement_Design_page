import { createSlice, nanoid } from "@reduxjs/toolkit";

const slices = createSlice({
    name: "codes",
    initialState: {
        codes: [],
        update: []
    },
    reducers: {
        storeCodes: (state, action) => {
            const {name, html, css, slug} = action.payload;
            const codesObj = {
                id: nanoid(),
                codeParams:{
                    name: name,
                    html: html,
                    css: css,
                    slug: slug
                }
            }
            state.codes.push(codesObj);
        },
        removeCode: (state, action) => {
            state.codes = state.codes.filter(code => code.id !== action.payload );
        },
        updateCode: (state, action) => {
            state.update.push(action.payload.html);
        },
    }
});

export const {storeCodes, removeCode, updateCode} = slices.actions;
export default slices.reducer; 