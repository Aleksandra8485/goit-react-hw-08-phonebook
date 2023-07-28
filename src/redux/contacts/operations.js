import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const saveContact = createAsyncThunk(
  'contacts/saveContact',
  async contactData => {
    try {
      const response = await axios.post('/contacts', contactData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to save contact.');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      throw new Error('Failed to delete contact.');
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { getState }) => {
    const token = getState().auth.token; // pobieranie tokena z Redux Store
    try {
      const response = await axios.get('/contacts', {
        headers: {
          Authorization: `Bearer ${token}`, // dodanie nagłówka z tokenem
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
