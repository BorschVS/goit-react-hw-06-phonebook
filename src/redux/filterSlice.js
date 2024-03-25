import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { query: '' },
  reducers: {
    searchQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { searchQuery } = filterSlice.actions;
