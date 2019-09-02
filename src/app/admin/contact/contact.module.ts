import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';
import {
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DialogModule } from '@app/shared/dialog';
import { ContactRoutingModule } from './contact.routing.module';
import { featureKey } from './contact.config';
import { reducer } from './reducers';
import { EFFECTS } from './effects';
import { SERVICES } from './services';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';

const MAT_MODULES = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatDialogModule
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature(EFFECTS),
    TranslateModule.forChild(),
    MAT_MODULES,
    FlexLayoutModule,
    DialogModule,
    ContactRoutingModule
  ],
  declarations: [
    CONTAINERS,
    COMPONENTS
  ],
  providers: [SERVICES]
})
export class ContactModule {
}
