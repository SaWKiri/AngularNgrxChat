import { ActionReducerMap } from "@ngrx/store";
import { Auth, authReducer } from "./app-auth";
import { Chats, chatsReducer } from "./app-chats";



export interface AppState {
  chats: Chats;
  auth: Auth;
}

export let appReducers: ActionReducerMap<AppState> = {
  chats: chatsReducer,
  auth: authReducer
}
