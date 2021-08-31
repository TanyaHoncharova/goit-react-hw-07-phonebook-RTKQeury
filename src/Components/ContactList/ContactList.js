import React from 'react';
import Contacts from './contacts';
import Loader from '../Loader';

import { useFetchContactsQuery } from '../../redux/contacts/ContactsSlice';



const ContactList = () => {

    const { data, error, isFetching } = useFetchContactsQuery();
    console.log(data);
    return (
        <>
            {isFetching && <Loader />}
            {data && <Contacts contacts={data} />}

        </>)
};


export default ContactList;