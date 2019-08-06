import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@app/core/store';
import { Language } from '@app/core/i18n';
import { AppSettingsAction } from '@app/core/app-settings';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(
    private store: Store<AppState>
  ) {
  }

  onLanguageSelect(language: Language) {
    this.store.dispatch(AppSettingsAction.changeLanguage({ language }));
  }
}
