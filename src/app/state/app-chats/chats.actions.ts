import { createAction, props } from "@ngrx/store";

export enum ChatsActionsType {
  SET_CONTACTS = '[Chats Component] Set Contacts List',
  SET_SELECTED_CONTACT = '[Chats Component] Set Selected Contact'
}


export const setContacts = createAction(
  ChatsActionsType.SET_CONTACTS,
  props<{contactsList: any[] | null}>()
)

export const setSelectedContact = createAction(
  ChatsActionsType.SET_SELECTED_CONTACT,
  props<{ selectedContact: any }>()
);
