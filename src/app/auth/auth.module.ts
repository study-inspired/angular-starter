import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authFeatureKey, AUTH_CONFIGURATION, AuthConfiguration } from './auth.config';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthEffects } from './auth.effects';
import { authReducer } from './auth.reducer';
import { AuthInterceptor } from './auth-interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error('AuthModule is already loaded. Import only in AppModule!');
    }
  }

  static forRoot(config: AuthConfiguration): ModuleWithProviders {

    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: AUTH_CONFIGURATION,
          useValue: config
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        AuthService,
        AuthGuard
      ]
    };
  }
}
