import {
  createSlice
} from "@reduxjs/toolkit";

const pageControlsSlice = createSlice({
  name: "PageControls",
  initialState: {
    hostingPannelActive: false,
    designPage: "home",
    designSection: "navigation"
  },
  reducers: {
    setHostingPannelActive: (state, action) => {
      state.hostingPannelActive = action.payload;
    },
    setDesignPage: (state, action) => {
      state.designPage = `${action.payload}`;
    },
    setDesignSection: (state, action) => {
      state.designSection = action.payload;
    }
  },
});

export const {
  setHostingPannelActive,
  setDesignPage,
  setDesignSection
} = pageControlsSlice.actions;

export default pageControlsSlice.reducer;