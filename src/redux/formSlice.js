import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

//persistor
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  name: '',
  number: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeField(state, { payload }) {
      const { name, number } = payload;
      return {
        ...state,
        id: nanoid(),
        name,
        number,
      };
    },
    resetForm(state) {
      return initialState;
    },
  },
});

const persistConfig = {
  key: 'form',
  storage,
};

export const formReducer = persistReducer(persistConfig, formSlice.reducer);

export const { addContact, changeField, resetForm } = formSlice.actions;
