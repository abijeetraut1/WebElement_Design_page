import {
  createSlice
} from "@reduxjs/toolkit";

const pageControlsSlice = createSlice({
  name: "PageControls",
  initialState: {
    hostingPannelActive: false, // setting hosting pannel active
    designPage: "home", // which page we are working on
    designSection: "navigation", // which component we are editing on
    isEdit: false, // allowing the pannel to be edit
    isPage: 0 // shows the current page options
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
    },
    setEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setPage: (state, action) => {
      if (action.payload === "more") {
        state.isPage = state.isPage + 1;
      } else if(action.payload === "previous") {
        state.isPage = state.isPage - 1;
      } else if(action.payload === "reset"){
        state.isPage = 0;
      }
    },
  },
});

export const {
  setHostingPannelActive,
  setDesignPage,
  setDesignSection,
  setEdit,
  setPage
} = pageControlsSlice.actions;

export default pageControlsSlice.reducer;