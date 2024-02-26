import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
