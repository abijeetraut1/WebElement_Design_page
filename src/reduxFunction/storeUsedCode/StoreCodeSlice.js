import { createSlice, nanoid } from "@reduxjs/toolkit";

const slices = createSlice({
    name: "codes",
    initialState: {
        codes: []
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
        }
    }
});

export const {storeCodes, removeCode} = slices.actions;
export default slices.reducer; 