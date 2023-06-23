import { Injectable } from '@angular/core';

//L'INTERFACE DAY EST DEFINI POUR REPRESENTER UNE JOURNÉE DU CALENDRIER
interface Day {
  date: number;
  month: number;
}

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  //DÉFINITION DES DIFFERENTES PROPRIÉTÉS, VARIABLES UTILES POUR LE FONCTIONNEMENT DU SERVICE
  weekdays: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  currentMonth: number;
  currentYear: number;
  currentMonthName: string;
  calendar: Day[][];
  selectedDate: number | null;

  //INITIALISATION DES PROPRIÉTÉS, VARIABLES
  constructor() {
    const currentDate = new Date();
    this.currentMonth = currentDate.getMonth();
    this.currentYear = currentDate.getFullYear();
    this.currentMonthName = this.getMonthName(this.currentMonth);
    this.calendar = this.generateCalendar(this.currentMonth, this.currentYear);
    this.selectedDate = null;
  }

  //CETTE MÉTHODE PERMET DE RECUPERER LE MOIS PRECEDENT DU MOIS AFFICHÉ
  previousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.currentMonthName = this.getMonthName(this.currentMonth);
    this.calendar = this.generateCalendar(this.currentMonth, this.currentYear);
    this.selectedDate = null;
  }
  //CETTE MÉTHODE PERMET DE RÉCUPERER LE MOIS SUIVANT DU MOIS AFFICHÉ
  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.currentMonthName = this.getMonthName(this.currentMonth);
    this.calendar = this.generateCalendar(this.currentMonth, this.currentYear);
    this.selectedDate = null;
  }

  //CETTE MÉTHODE PERMET DE CRÉER LE CALENDRIER
  generateCalendar(month: number, year: number): Day[][] {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();

    const calendar: Day[][] = [];
    let week: Day[] = [];

    const previousMonthLastDate = new Date(year, month, 0).getDate();
    const startDay = (firstDayOfMonth - 1 + 7) % 7;
    for (let i = startDay; i >= 0; i--) {
      const date = previousMonthLastDate - (startDay - i);
      week.push({ date, month: month - 1 });
    }

    for (let i = 1; i <= numDays; i++) {
      week.push({ date: i, month });
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }

    let nextMonthDate = 1;
    while (week.length < 7) {
      week.push({ date: nextMonthDate, month: month + 1 });
      nextMonthDate++;
    }

    calendar.push(week);

    return calendar;
  }

  //CETTE MÉTHODE PERMET DE RECUPERER LES NOMS DES DIFFERENTS MOIS
  getMonthName(month: number): string {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[month];
  }

  isToday(date: number): boolean {
    const today = new Date();
    return (
      date === today.getDate() &&
      this.currentMonth === today.getMonth() &&
      this.currentYear === today.getFullYear()
    );
  }

  isSelected(date: number): boolean {
    return date === this.selectedDate;
  }

  selectDate(date: number): void {
    if (date !== -1) {
      this.selectedDate = date;
    }
  }
}
