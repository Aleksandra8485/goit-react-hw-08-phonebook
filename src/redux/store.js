import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contactsSlice';
import authSlice from './auth/authSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authSlice,
  },
});

export default store;
