import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  authFeatureKey,
  defaultAuthConfig,
  AUTH_CONFIGURATION,
  AuthConfiguration,
} from './auth.config';
import { AuthGuard } from './guards';
import { AuthService } from './services';
import { AuthInterceptor } from './interceptors';
import { AuthEffects, authReducer } from './store';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule {
  static forRoot(config?: AuthConfiguration): ModuleWithProviders {
    const authConfig = {
      ...defaultAuthConfig,
      ...config
    };

    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: AUTH_CONFIGURATION,
          useValue: authConfig
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

  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error('AuthModule is already loaded. Import only in AppModule!');
    }
  }

}
