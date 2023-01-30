import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://63d42b8820b08498cbb8cb93.mockapi.io/contacts'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://63d42b8820b08498cbb8cb93.mockapi.io/contacts/${id}`
      );
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://63d42b8820b08498cbb8cb93.mockapi.io/contacts',
        contact
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const updateContact = createAsyncThunk(
//   'contacts/updateContact',
//   async ({ id, name, number }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.patch(`/contacts/${id}`, { name, number });

//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
