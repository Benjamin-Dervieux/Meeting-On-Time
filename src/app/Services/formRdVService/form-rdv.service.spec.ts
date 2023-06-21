import { TestBed } from '@angular/core/testing';

import { FormRdvService } from './form-rdv.service';

describe('FormRdvService', () => {
  let service: FormRdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
