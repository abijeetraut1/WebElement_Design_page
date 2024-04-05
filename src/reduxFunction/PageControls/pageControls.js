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
    isPage: 0, // shows the current page options
    isFilterActive: false,
    isEditing: false,
    isChooseDesignIsOpen: false,
    isCustomizeDesignIsOpen: false,
    isMobileSlideBarOpen: false,
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
      } else if (action.payload === "reset") {
        state.isPage = 0;
      }
    },
    setFilterActive: (state, action) => {
      state.isFilterActive = state.isFilterActive ? false : true;
    },
    setEditingMode: (state, action) => {
      state.isEditing = state.isEditing ? false : true;
    },
    setChooseDesignIsOpen: (state, action) => {
      state.isChooseDesignIsOpen = state.isChooseDesignIsOpen ? false : true;
    },
    setCustomizeDesignIsOpen: (state, action) => {
      state.isCustomizeDesignIsOpen = state.isCustomizeDesignIsOpen ? false : true;
    },
    setIsMobileSlideBarOpen: (state, action) => {
      state.isMobileSlideBarOpen = state.isMobileSlideBarOpen ? false : true;
    },
  },
});

export const {
  setHostingPannelActive,
  setDesignPage,
  setDesignSection,
  setEdit,
  setPage,
  setFilterActive,
  setEditingMode,
  setChooseDesignIsOpen,
  setCustomizeDesignIsOpen,
  setIsMobileSlideBarOpen
} = pageControlsSlice.actions;

export default pageControlsSlice.reducer;