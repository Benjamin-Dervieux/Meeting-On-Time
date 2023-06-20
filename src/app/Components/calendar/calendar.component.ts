import { Component } from '@angular/core';
import { MeetingOnTimeService } from '../../Services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  currentMonth: string;
  calendar: Array<string[]>;

  meetingOnTimeService!: MeetingOnTimeService;

  constructor(meetingOnTimeService: MeetingOnTimeService) {
    const today = new Date();
    const monthNames = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];
    this.currentMonth = monthNames[today.getMonth()];
    this.meetingOnTimeService = meetingOnTimeService;

    this.calendar = this.meetingOnTimeService.getCalendar();
  }
}
