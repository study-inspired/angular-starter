import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { CONTAINERS } from './containers';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    CONTAINERS
  ]
})
export class LoginModule { }
