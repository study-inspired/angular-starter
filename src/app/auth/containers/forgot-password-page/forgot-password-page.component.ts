import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthState } from '../../reducers';
import { ResetPasswordActions } from '../../actions';
import { selectLoginPagePending } from '../../selectors';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss', '../auth-page.scss']
})
export class ForgotPasswordPageComponent implements OnInit {
  pending$: Observable<boolean> = this.store.pipe(select(selectLoginPagePending));

  constructor(
    private store: Store<AuthState>
  ) { }

  ngOnInit() {
  }

  onResetPassword(email: string): void {
    this.store.dispatch(ResetPasswordActions.sendResetPasswordLink({ email }));
  }

}
