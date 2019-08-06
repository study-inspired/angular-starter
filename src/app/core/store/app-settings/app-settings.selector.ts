import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../reducer';
import { AppSettingsState } from './app-settings.reducer';

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
