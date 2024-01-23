// export const selectLoading = state => state.contacts.loading;

export const getContacts = state => state.contacts.contacts;
export const selectLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;