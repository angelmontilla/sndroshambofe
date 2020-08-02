import { TestBed } from '@angular/core/testing';

import { SrvplayroundService } from './srvplayround.service';

describe('SrvplayroundService', () => {
  let service: SrvplayroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvplayroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
