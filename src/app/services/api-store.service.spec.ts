import { TestBed } from '@angular/core/testing';

import { ApiStoreService } from './api-store.service';

describe('ApiStoreService', () => {
  let service: ApiStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
