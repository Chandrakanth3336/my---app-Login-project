import { TestBed } from '@angular/core/testing';

import { AmazoncartService } from './amazoncart.service';

describe('AmazoncartService', () => {
  let service: AmazoncartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazoncartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
