import { Component } from '@angular/core';
import { CalendarService } from '../../Services/calendarService/calendar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  constructor(
    public calendarService: CalendarService,
    private router: Router
  ) {}

  selectDate(date: number): void {
    this.calendarService.selectDate(date);
    this.router.navigate(['formRdv']);
  }
}
