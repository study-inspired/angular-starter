import { Action } from '@ngrx/store';

import { NgrxUtilConnectingModule } from './ngrx-util-connecting';

export function dispatchAction<T extends Action = Action>(action: T) {
  const store = NgrxUtilConnectingModule.store;

  if (store === null) {
    throw new Error('Can not connect to store!');
  }

  store.dispatch(action);
}
