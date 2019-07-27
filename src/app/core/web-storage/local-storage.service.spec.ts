import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {

  function setup() {
    const service: LocalStorageService = new LocalStorageService();

    return { service };
  }

  it('should be created', () => {
    const { service } = setup();
    expect(service).toBeTruthy();
  });
});
