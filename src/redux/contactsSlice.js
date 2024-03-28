import { createReducer, createSlice, nanoid } from '@reduxjs/toolkit';

// persistor

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return state.push({ ...action.payload, id: nanoid() });
    },
    deleteContact(state, action) {
      return state.contactList.filter(
        ({ id }) => id !== action.payload
      );
    },
  },
});

export const contactsReducer = createReducer(contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;