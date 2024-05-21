import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    mobileMenu: false,
    pdfData: [],
    searchPdf: [],
    query: null,
    user: false,
    pdfView: null,
    yearPdf: [],
    shimmer: false,
    firstYear:[],

  },
  reducers: {
    setMobileMenu: (state, action) => {
      state.mobileMenu = action.payload;
    },
    setPdfData: (state, action) => {
      state.pdfData = action.payload;
    },
    setSearchPdf: (state, action) => {
      state.searchPdf = action.payload;
    },
    setUserQuery: (state, action) => {
      state.query = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setPdfView: (state, action) => {
      state.pdfView = action.payload;
    },
    setYearPdf: (state, action) => {
      state.yearPdf = action.payload;
    },
    setShimmer: (state, action) => {
      state.shimmer = action.payload;
    },
    setFirstYear:(state,action)=>{
      state.firstYear = action.payload;
    }

  },
});

export const {
  setShimmer,
  setYearPdf,
  setPdfView,
  setUser,
  setUserQuery,
  setSearchPdf,
  setMobileMenu,
  setPdfData,
  setFirstYear
} = UserSlice.actions;
export default UserSlice.reducer;
