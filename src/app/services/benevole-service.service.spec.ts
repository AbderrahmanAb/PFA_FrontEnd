import { TestBed } from '@angular/core/testing';

import { BenevoleServiceService } from './benevole-service.service';

describe('BenevoleServiceService', () => {
  let service: BenevoleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenevoleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
