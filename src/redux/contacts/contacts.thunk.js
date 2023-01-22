import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const contactsAPI = axios.create({
  baseURL: 'https://63cd4b0bd4d47898e39634b4.mockapi.io/contacts',
});

export const fetchContacts = createAsyncThunk(
  'users/fetchAll',
  async (_, thinkAPI) => {
    try {
      const { data } = await contactsAPI.get('/contacts');
      return data;
    } catch (error) {
      return thinkAPI.rejectWithValue('error.message');
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thinkAPI) => {
    try {
      const { data } = await contactsAPI.post('/contacts', contact);
      return data;
    } catch (error) {
      return thinkAPI.rejectWithValue('error.message');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thinkAPI) => {
    try {
      const { data } = await contactsAPI.delete(`/contacts/${id}}`);
      return data;
    } catch (error) {
      return thinkAPI.rejectWithValue('error.message');
    }
  }
);
