import { select as _select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NgrxUtilConnectingModule } from './ngrx-util-connecting';

export function select<T, V>(selector: (state: T) => V): Observable<V> {
  const store = NgrxUtilConnectingModule.store;

  if (store === null) {
    throw new Error('Can not connect to store!');
  }

  return store.pipe(_select(selector));
}
