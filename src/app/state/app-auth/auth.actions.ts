import { createAction, props } from '@ngrx/store';

export enum AuthActionsTypes {
  LOGIN = '[Login Component] Login',
  LOGOUT = '[Login Component] Logout',
}

export const login = createAction(
  AuthActionsTypes.LOGIN,
  props<{ isLogin: boolean }>()
);

export const logout = createAction(
  AuthActionsTypes.LOGOUT,
  props<{ isLogin: boolean; token: string | null }>()
);
