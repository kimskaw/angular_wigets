import { TestBed } from '@angular/core/testing';

import { CctService } from './cct-dashboard.service';

describe('CctServiceService', () => {
  let service: CctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
