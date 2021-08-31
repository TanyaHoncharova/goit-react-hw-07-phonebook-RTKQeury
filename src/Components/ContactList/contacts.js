import React from 'react';
import { useDeleteContactMutation } from '../../redux/contacts/ContactsSlice';
import style from './ContactList.module.css';

const Contacts = ({ contacts }) => {

    const [deleteContact, { isUpdating: isDeliting }] = useDeleteContactMutation();
    return (
        <ul className={style.list}>
            {contacts.map(({ id, name, number }) => {
                return (
                    <li key={id} className={style.item}>
                        <span>{name}</span><span>{number}</span>
                        <button
                            className={style.btn}
                            type="button"
                            id={id}
                            onClick={() => deleteContact(id)}
                        >
                            {isDeliting ? 'Deliting...' : 'Delete'}</button>
                    </li>
                );
            })}
        </ul>
    )
};

export default Contacts;