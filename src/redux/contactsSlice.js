import { createSlice, nanoid } from '@reduxjs/toolkit';

// persistor
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactList: [],
  },
  reducers: {
    addContact(state, action) {
      state.contactList.push({ ...action.payload, id: nanoid() });
    },
    deleteContact(state, action) {
      state.contactList = state.contactList.filter(
        ({ id }) => id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
