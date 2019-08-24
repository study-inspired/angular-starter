import { Store } from '@ngrx/store';
import { NgModule } from '@angular/core';

@NgModule()
export class NgrxUtilConnectingModule {
  static store: Store<any> | null = null;

  constructor(private store: Store<any>) {
    this.connect();
  }

  connect() {
    NgrxUtilConnectingModule.store = this.store;
  }
}
