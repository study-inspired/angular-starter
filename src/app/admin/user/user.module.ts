import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { UserRoutingModule } from './user-routing.module';
import { CONTAINER_COMPONENTS } from './containers';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    UserRoutingModule
  ],
  declarations: [
    CONTAINER_COMPONENTS
  ],
})
export class UserModule {
}
