import { createReducer, on } from "@ngrx/store";
import { login, logout } from "./auth.actions";


export interface Auth {
  isLogedIn: boolean;
  token: string | null;
}

export const initialAuthState: Auth = {
  isLogedIn: false,
  token: null
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state) => ({ ...state, isLogedIn: true })),
  on(logout, (state) => ({ ...state, isLogedIn: false }))
);
