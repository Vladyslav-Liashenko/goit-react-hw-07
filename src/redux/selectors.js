export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filter.value; 
export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = state => state.contacts.error;
 
