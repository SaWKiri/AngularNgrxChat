import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Auth } from './auth.reducer';

export const selectAuth = createFeatureSelector<Auth>('auth');

export const selectIsLogedIn = createSelector(
  selectAuth,
  (state) => state.isLogedIn
);

export const selectToken = createSelector(selectAuth, (state) => state.token);
