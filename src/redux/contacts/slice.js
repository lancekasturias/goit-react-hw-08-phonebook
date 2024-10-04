import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from "./operations";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contactsList: [],
        isLoadingDelete: false,
        isLoadingAdd: false,
        isLoadingPage: false, 
        error: null,
        deleteContactId: null, 
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
               state.isLoadingPage = true; 
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoadingPage = false; 
                state.error = null;
                state.contactsList = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.error = action.payload;
            }
            )

            .addCase(addContact.pending, state => {
                state.isLoadingAdd = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoadingAdd = false;
                state.error = null;
                state.contactsList.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoadingAdd = false;
                state.error = action.payload;
            })  
            
            .addCase(deleteContact.pending, (state, action) => {
                state.isLoadingDelete = true;
                state.deleteContactId = action.meta.arg;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoadingDelete = false;
                state.error = null;
                state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.isLoadingDelete = false;
                state.error = action.payload;
            }) 
    },    
});