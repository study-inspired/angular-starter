import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';

const MAT_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    MAT_MODULES,
    FlexLayoutModule,

    HomeRoutingModule
  ],
  declarations: [HomePageComponent]
})
export class HomeModule { }
