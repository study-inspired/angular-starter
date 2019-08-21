import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginPageComponent,
  ForgotPasswordPageComponent,
  LockScreenPageComponent
} from './containers';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'lock',
    component: LockScreenPageComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
