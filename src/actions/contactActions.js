import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './type';

export const getContacts = () => {
    return {
        type: GET_CONTACTS
    }
}

export const deleteContacts = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}

export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact
    }
}