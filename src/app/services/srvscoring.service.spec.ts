import { TestBed } from '@angular/core/testing';

import { SrvscoringService } from './srvscoring.service';

describe('SrvscoringService', () => {
  let service: SrvscoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvscoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
