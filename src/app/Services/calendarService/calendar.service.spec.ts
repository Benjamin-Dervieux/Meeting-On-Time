import { TestBed } from '@angular/core/testing';

import { CalendarService } from '../calendarService/calendar.service';

describe('MeetingOnTimeService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
