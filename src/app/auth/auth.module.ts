import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthConfig } from './auth.config';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthEffects } from './auth.effects';
import { reducer } from './auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(AuthConfig.featureName, reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error('AuthModule is already loaded. Import only in AppModule!');
    }
  }
}
