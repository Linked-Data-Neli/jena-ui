import { TestBed } from '@angular/core/testing';

import { JenaService } from './jena.service';

describe('JenaService', () => {
  let service: JenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
