import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

// запрос для json-servera 
axios.defaults.baseURL = 'http://localhost:4040';

//запрос для  mockapi

// axios.defaults.baseURL = 'https://61226d55d44628001705484b.mockapi.io';

const fetchContacts = createAsyncThunk(
    'contacts /fetchContacts',
    async (_, rejectedWithValue) => {
        try {
            const { data } = await axios.get('/contacts');
            // console.log(data);
            return data;
        } catch (error) {
            return rejectedWithValue(error)
        };
    }
);


const addContact = createAsyncThunk(
    'contacts / addContact',
    async (newContact) => {
        axios
            .post('/contacts', newContact)
            .then(({ data }) => {
                console.log(data);
                return data;
            })
    }
);


const deleteContact = createAsyncThunk(
    'contacts / deleteContact',
    async (id) => {
        axios
            .delete('/contacts/${id}')
            .then(() => {
                console.log(id)
                return id
            })

    }

);

export default {
    fetchContacts,
    addContact,
    deleteContact
};