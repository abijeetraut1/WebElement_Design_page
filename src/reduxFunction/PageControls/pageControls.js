import {
    createSlice
} from "@reduxjs/toolkit";

const controls = createSlice({
    name: "PagesButtonControls",
    initialState: {
        setNamePannel: false
    },
    setClose: (state, action) => {
        state.setNamePannel = action.payload;
    }
})

export const { setClose } = controls.actions;
export default controls.reducer;