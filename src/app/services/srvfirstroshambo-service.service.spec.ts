import { TestBed } from '@angular/core/testing';

import { SrvfirstroshamboServiceService } from './srvfirstroshambo-service.service';

describe('SrvfirstroshamboServiceService', () => {
  let service: SrvfirstroshamboServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvfirstroshamboServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
