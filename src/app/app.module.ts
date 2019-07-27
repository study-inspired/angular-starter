import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { WebStorageModule } from '@web-storage';
import { CoreModule } from '@app/core';
import { AuthModule, AuthConfiguration } from '@app/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const authConfig: AuthConfiguration = {
  loginURI: 'login',
  loginApiUrl: 'auth/login'
};
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    WebStorageModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    AuthModule.forRoot(authConfig)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
