import { createSlice } from "@reduxjs/toolkit";

let storageList =
  localStorage.getItem("contacts") !== null
    ? JSON.parse(localStorage.getItem("contacts"))
    : [];
const contactsInitialState = storageList;

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    loadContacts(state, action) {
      state = action.payload;
    },
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact, loadContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
