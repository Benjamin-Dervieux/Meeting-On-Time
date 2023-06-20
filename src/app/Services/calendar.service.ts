import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  currentMonth: string;
  someOtherProperty: any;

  constructor() {
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
  }

  setCurrentMonth(month: string) {
    this.currentMonth = month;
  }

  getCalendar(): Array<string[]> {
    const calendar: Array<string[]> = [];

    const week1 = ['1', '2', '3', '4', '5', '6', '7'];
    const week2 = ['8', '9', '10', '11', '12', '13', '14'];
    const week3 = ['15', '16', '17', '18', '19', '20', '21'];
    const week4 = ['22', '23', '24', '25', '26', '27', '28'];
    const week5 = ['29', '30', '31'];
    calendar.push(week1, week2, week3, week4, week5);

    return calendar;
  }
}
