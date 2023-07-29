import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  saveContact,
  deleteContact,
} from '../contacts/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(saveContact.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(saveContact.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.contacts.push(action.payload);
    });
    builder.addCase(saveContact.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(deleteContact.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(fetchContacts.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.contacts = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    // Obsługa akcji updateFilter
    builder.addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });
  },
});

export const { setFilter, setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
