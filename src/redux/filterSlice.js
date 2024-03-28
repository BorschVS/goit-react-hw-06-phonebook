import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: "",
  reducers: {
    searchQuery(state, action) {
      state = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { searchQuery } = filterSlice.actions;
