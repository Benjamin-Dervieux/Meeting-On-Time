import { TestBed } from '@angular/core/testing';

import { MeetingOnTimeService } from './calendar.service';

describe('MeetingOnTimeService', () => {
  let service: MeetingOnTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingOnTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
