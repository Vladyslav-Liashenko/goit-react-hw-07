import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import axios from 'axios';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, action) => {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  const response = await axios.get(
    'https://65d9c241bcc50200fcdc0d3c.mockapi.io/contacts'
  );
  return response.data;
});
console.dir(fetchContacts);

export const { addContact, deleteContact } = contactSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};
export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
