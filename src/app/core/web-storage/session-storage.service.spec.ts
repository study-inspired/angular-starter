import { SessionStorageService } from './session-storage.service';

describe('SessionStorageService', () => {

  function setup() {
    const service: SessionStorageService = new SessionStorageService();

    return { service };
  }

  it('should be created', () => {
    const { service } = setup();
    expect(service).toBeTruthy();
  });

});
