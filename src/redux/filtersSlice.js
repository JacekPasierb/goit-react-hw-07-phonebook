import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = "";

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilters(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
