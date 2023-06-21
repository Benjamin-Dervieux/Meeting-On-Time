import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  currentMonth: string;
  someOtherProperty: any;
  monthNames: string[] = [
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
  calendar: Array<string[]> = [
    ['1', '2', '3', '4', '5', '6', '7'],
    ['8', '9', '10', '11', '12', '13', '14'],
    ['15', '16', '17', '18', '19', '20', '21'],
    ['22', '23', '24', '25', '26', '27', '28'],
    ['29', '30', '31'],
  ];

  constructor() {
    const today = new Date();
    this.currentMonth = this.monthNames[today.getMonth()];
  }

  setCurrentMonth(month: string) {
    this.currentMonth = month;
  }

  //==================================METHOD TO DISPLAY CALENDAR=============================
  getCalendar(): Array<string[]> {
    return this.calendar;
  }

  //===================================METHOD FOR PREVIOUS MONTH================================
  previousMonth() {
    const currentMonthIndex = this.monthNames.indexOf(this.currentMonth);
    const previousMonthIndex =
      (currentMonthIndex - 1 + this.monthNames.length) % this.monthNames.length;
    this.currentMonth = this.monthNames[previousMonthIndex];
  }
  //===================================METHOD FOR NEXT MONTH====================================
  nextMonth() {
    const currentMonthIndex = this.monthNames.indexOf(this.currentMonth);
    const nextMonthIndex = (currentMonthIndex + 1) % this.monthNames.length;
    this.currentMonth = this.monthNames[nextMonthIndex];
  }
}
