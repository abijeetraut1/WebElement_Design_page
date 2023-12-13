import { createSlice } from "@reduxjs/toolkit";

const pageControlsSlice = createSlice({
  name: "PageControls",
  initialState: {
    hostingPannelActive: false,
  },
  reducers: {
    setHostingPannelActive: (state, action) => {
      state.hostingPannelActive = action.payload;
    },
  },
});

export const { setHostingPannelActive } = pageControlsSlice.actions;
export default pageControlsSlice.reducer;
