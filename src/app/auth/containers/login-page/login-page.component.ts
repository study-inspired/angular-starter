import { Component, OnDestroy } from '@angular/core';

import { dispatchAction, select } from '@app/core/store/utils';

import { Credential } from '../../models';
import { LoginPageActions } from '../../actions';
import { selectLoginPageError, selectLoginPagePending } from '../../selectors';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss', '../auth-page.scss']
})
export class LoginPageComponent implements OnDestroy {

  pending$ = select(selectLoginPagePending);
  error$ = select(selectLoginPageError);

  onLogin(credential: Credential) {
    dispatchAction(LoginPageActions.login({ credential }));
  }

  ngOnDestroy() {
    dispatchAction(LoginPageActions.leavePage());
  }
}
