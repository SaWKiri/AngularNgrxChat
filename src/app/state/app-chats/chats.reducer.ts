import { createReducer, on } from "@ngrx/store";
import { setContacts, setSelectedContact } from "./chats.actions";

export interface Chats {
  contactsList: any[] | null;
  selectedContact: any | null;
}


const initialChatsState: Chats = {
  contactsList: [],
  selectedContact: null,
};


export const chatsReducer = createReducer(
  initialChatsState,
  on(setContacts, (state, payload) => ({
    ...state,
    contactsList: payload.contactsList,
  })),
  on(setSelectedContact, (state, payload) => ({
    ...state,
    selectedContact: payload.selectedContact,
  }))
);
