import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../reducers';
import { AppSettingsState } from '../reducers/app-settings.reducer';

export const selectAppSettingsState = createFeatureSelector<
  AppState,
  AppSettingsState
>('appSettings');

export const selectAppSettings = createSelector(
  selectAppSettingsState,
  (state: AppSettingsState) => state
);

export const selectCurrentLanguage = createSelector(
  selectAppSettingsState,
  (state: AppSettingsState) => state.language
);
