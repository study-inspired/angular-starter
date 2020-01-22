import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '@app/core/store';
import { AuthSelectors } from '@app/auth';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  loggedIn$ = this.store.pipe(select(AuthSelectors.selectIsAuthenticated));

  constructor(
    private store: Store<AppState>
  ) {
  }
}
