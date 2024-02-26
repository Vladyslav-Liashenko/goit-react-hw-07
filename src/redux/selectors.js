import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.value;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const contacts = state => state.contacts.items;
export const filter = state => state.filter.value;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
