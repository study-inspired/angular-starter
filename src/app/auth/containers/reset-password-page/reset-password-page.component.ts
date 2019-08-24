import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AuthState } from '../../reducers';
import { ResetPasswordActions } from '../../actions';
import { selectResetPasswordPagePending } from '../../selectors';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss', '../auth-page.scss']
})
export class ResetPasswordPageComponent implements OnInit {

  pending$ = this.store.pipe(select(selectResetPasswordPagePending));

  constructor(
    private store: Store<AuthState>
  ) { }

  ngOnInit() {
  }

  onResetPassword(password: string): void {
    this.store.dispatch(ResetPasswordActions.resetPassword({ password }));
  }

}
