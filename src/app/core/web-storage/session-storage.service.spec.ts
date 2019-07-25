import { TestBed } from '@angular/core/testing';

import { SessionStorageService } from './session-storage.service';

xdescribe('SessionStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionStorageService = TestBed.get(SessionStorageService);
    expect(service).toBeTruthy();
  });
});
