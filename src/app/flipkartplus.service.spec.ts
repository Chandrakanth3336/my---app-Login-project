import { TestBed } from '@angular/core/testing';

import { FlipkartplusService } from './flipkartplus.service';

describe('FlipkartplusService', () => {
  let service: FlipkartplusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartplusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
