import { TestBed } from '@angular/core/testing';

import { CompteserviceService } from './compteservice.service';

describe('CompteserviceService', () => {
  let service: CompteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
