import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AuthConfig } from './auth.config';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector(AuthConfig.featureName);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);

export const selectAuthToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.authToken
);
