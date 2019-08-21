import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Credential } from '../../models';
import { AuthState } from '../../reducers';
import { LoginPageActions } from '../../actions';
import { selectLoginPagePending } from '../../selectors';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss', '../auth-page.scss']
})
export class LoginPageComponent implements OnInit {

  pending$ = this.store.pipe(select(selectLoginPagePending));

  constructor(
    private store: Store<AuthState>
  ) { }

  ngOnInit() {
  }

  onLogin(credential: Credential): void {
    this.store.dispatch(LoginPageActions.login({ credential }));
  }

}
