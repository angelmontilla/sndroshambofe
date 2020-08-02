import { TestBed } from '@angular/core/testing';

import { SrvstartService } from './srvstart.service';

describe('SrvstartService', () => {
  let service: SrvstartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvstartService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
