import { TestBed } from '@angular/core/testing';

import { SrvtotalnokafkaService } from './srvtotalnokafka.service';

describe('SrvtotalnokafkaService', () => {
  let service: SrvtotalnokafkaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvtotalnokafkaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
