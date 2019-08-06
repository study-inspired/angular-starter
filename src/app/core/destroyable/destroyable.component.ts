import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class DetroyableComponent implements OnDestroy {

  protected componentDetroyed$: Subject<any>;

  constructor() {
    this.componentDetroyed$ = new Subject();
  }

  ngOnDestroy(): void {
    this.componentDetroyed$.next();
    this.componentDetroyed$.complete();
  }

}
