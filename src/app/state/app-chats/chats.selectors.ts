import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chats } from './chats.reducer';

export const selectChats = createFeatureSelector<Chats>('chats');

export const selectChatsAll = createSelector(
  selectChats,
  (state) => {debugger; return state.contactsList;}
);

export const selectedContact = createSelector(
  selectChats,
  (state: Chats) => state.selectedContact
);
