import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from '@app/core';
import { AuthModule, AuthConfiguration } from '@app/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const authConfig: AuthConfiguration = {
  loginURL: 'login',
  loginApiURL: 'auth/login',
  headerName: 'Authorization',
  skipWhenExpired: true,
  whitelistedDomains: [],
  blacklistedRoutes: []
};
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    CoreModule.forRoot(),
    AuthModule.forRoot(authConfig)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
