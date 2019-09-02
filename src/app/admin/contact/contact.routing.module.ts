import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ContactListPageComponent,
  ContactCreatePageComponent,
  ContactDetailPageComponent,
  ContactEditPageComponent
} from './containers';

const routes: Routes = [
  {
    path: '',
    component: ContactListPageComponent
  },
  {
    path: 'create',
    component: ContactCreatePageComponent
  },
  {
    path: ':id',
    component: ContactDetailPageComponent
  },
  {
    path: ':id/edit',
    component: ContactEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
