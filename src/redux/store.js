import { contactApi } from './contacts/ContactsSlice'
import contactsReducer from './contacts/contacts-reducer';
import { configureStore } from '@reduxjs/toolkit';





const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        [contactApi.reducerPath]: contactApi.reducer,

    },
    middleware: getDifaultMiddelware => [
        ...getDifaultMiddelware(),
        contactApi.middleware,
    ]
});

export default store;
