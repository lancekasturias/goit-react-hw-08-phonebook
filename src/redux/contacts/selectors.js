import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/selectors";

export const selectContacts = state => state.contacts.contactsList; 
export const selectIsLoadingDelete = state => state.contacts.isLoadingDelete;
export const selectIsLoadingPage = state => state.contacts.isLoadingPage; 
export const selectIsLoadingAdd = state => state.contacts.isLoadingAdd;  
export const selectError = state => state.contacts.error;
export const selectDeleteContactId = state => state.contacts.deleteContactId;
export const selectVibleContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    const normalizeFilter = filter.toLocaleLowerCase();
    const findContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter));
    return findContacts;
})