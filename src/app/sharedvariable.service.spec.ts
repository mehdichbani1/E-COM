import { TestBed } from '@angular/core/testing';

import { SharedvariableService } from './sharedvariable.service';

describe('SharedvariableService', () => {
  let service: SharedvariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedvariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
