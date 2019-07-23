import { createSelector, createFeatureSelector } from '@ngrx/store';

import { authFeatureKey } from './auth.config';
import { AuthToken } from './models';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthToken = createSelector(
  selectAuthState,
  (state): AuthToken => state.authToken
);

export const selectIsAuthenticated = createSelector(
  selectAuthToken, (authToken): boolean => {
    return authToken && AuthToken.isValid(authToken);
  }
);
