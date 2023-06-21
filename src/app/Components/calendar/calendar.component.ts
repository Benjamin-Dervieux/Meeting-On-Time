import { Component } from '@angular/core';
import { CalendarService } from '../../Services/calendarService/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  constructor(public calendarService: CalendarService) {}

  selectDate(date: number): void {
    this.calendarService.selectDate(date);
  }
}
