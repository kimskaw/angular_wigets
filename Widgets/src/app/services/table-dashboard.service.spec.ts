import { TestBed } from '@angular/core/testing';

import { TableDashboardService } from './table-dashboard.service';

describe('TableDashboardService', () => {
  let service: TableDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
