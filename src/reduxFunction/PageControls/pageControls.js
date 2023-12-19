import {
  createSlice
} from "@reduxjs/toolkit";

const pageControlsSlice = createSlice({
  name: "PageControls",
  initialState: {
    hostingPannelActive: false,
    designPage: "home",
    designSection: "navigation",
    isEdit: false
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
    }
  },
});

export const {
  setHostingPannelActive,
  setDesignPage,
  setDesignSection,
  setEdit
} = pageControlsSlice.actions;

export default pageControlsSlice.reducer;