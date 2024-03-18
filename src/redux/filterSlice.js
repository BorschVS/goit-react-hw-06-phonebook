import { createSlice } from '@reduxjs/toolkit';

//persistor
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { query: '' },
  reducers: {
    searchQuery(state, action) {
      state.query = action.payload;
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
};

export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);

export const { searchQuery } = filterSlice.actions;
