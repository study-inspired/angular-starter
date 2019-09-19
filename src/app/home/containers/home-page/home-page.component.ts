import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '@app/core/store';
import { Language } from '@app/core/i18n';
import { appSettingsAction, selectCurrentLanguage } from '@app/core/app-settings';
import { AuthSelectors } from '@app/auth';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  loggedIn$ = this.store.pipe(select(AuthSelectors.selectIsAuthenticated));
  selectedLanguage$ = this.store.pipe(select(selectCurrentLanguage));

  constructor(
    private store: Store<AppState>
  ) {
  }

  onLanguageSelect(language: Language) {
    this.store.dispatch(appSettingsAction.changeLanguage({ language }));

  }
}
