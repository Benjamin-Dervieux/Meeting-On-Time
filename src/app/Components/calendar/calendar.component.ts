import { Component } from '@angular/core';
import { CalendarService } from 'src/app/Services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  currentMonth: string;
  calendar: Array<string[]>;

  calendarService!: CalendarService;

  constructor(calendarService: CalendarService) {
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
    this.calendarService = calendarService;

    this.calendar = this.calendarService.getCalendar();
  }
}
