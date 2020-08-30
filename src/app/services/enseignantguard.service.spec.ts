import { TestBed } from '@angular/core/testing';

import { EnseignantguardService } from './enseignantguard.service';

describe('EnseignantguardService', () => {
  let service: EnseignantguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnseignantguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
