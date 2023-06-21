import { Component } from '@angular/core';
import { CalendarService } from '../../Services/calendarService/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  currentMonth: string;
  calendar: Array<string[]>;

  constructor(public calendarService: CalendarService) {
    const today = new Date();
    this.currentMonth = this.calendarService.currentMonth;

    this.calendar = this.calendarService.getCalendar();
  }

  previousMonth() {
    this.calendarService.previousMonth();
    this.currentMonth = this.calendarService.currentMonth;
    this.calendar = this.calendarService.getCalendar();
  }

  nextMonth() {
    this.calendarService.nextMonth();
    this.currentMonth = this.calendarService.currentMonth;
    this.calendar = this.calendarService.getCalendar();
  }
}
