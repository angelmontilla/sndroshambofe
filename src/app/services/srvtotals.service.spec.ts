import { TestBed } from '@angular/core/testing';

import { SrvtotalsService } from './srvtotals.service';

describe('SrvtotalsService', () => {
  let service: SrvtotalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvtotalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
