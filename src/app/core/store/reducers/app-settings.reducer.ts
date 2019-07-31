import { createReducer, Action, on } from '@ngrx/store';

import { Language } from '../../i18n';
import { AppSettingsAction } from '../actions';

export interface AppSettingsState {
  language: Language;
  theme: string;
}

export const initialState: AppSettingsState = {
  language: 'en',
  theme: 'DEFAULT-THEME'
};

const reducer = createReducer(
  initialState,
  on(
    AppSettingsAction.changeLanguage,
    (state, { language }) => ({ ...state, language })
  ),
);

export function appSettingsReducer(
  state: AppSettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
