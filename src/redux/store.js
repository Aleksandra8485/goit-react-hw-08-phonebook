import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import contactsSlice from './contacts/contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
