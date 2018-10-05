import { TestBed } from '@angular/core/testing';

import { D1Service } from './d1.service';

describe('D1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: D1Service = TestBed.get(D1Service);
    expect(service).toBeTruthy();
  });
});
