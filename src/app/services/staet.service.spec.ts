import { TestBed } from '@angular/core/testing';

import { StaetService } from './staet.service';

describe('StaetService', () => {
  let service: StaetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
