import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.loading = true;
  state.error = false;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected),
});
export const contactsReducer = contactSlice.reducer;