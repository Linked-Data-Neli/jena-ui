import { TestBed } from '@angular/core/testing';

import { FormDisplayService } from './form-display.service';

describe('FormDisplayService', () => {
  let service: FormDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
