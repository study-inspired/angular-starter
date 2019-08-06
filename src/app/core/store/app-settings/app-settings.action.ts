import { createAction, props } from '@ngrx/store';

import { Language } from '../../i18n';

export class AppSettingsAction {
  static readonly changeLanguage = createAction(
    '[Settings] Change Language',
    props<{ language: Language }>()
  );

  static readonly changeTheme = createAction(
    '[Settings] Change Theme',
    props<{ theme: string }>()
  );
}
