import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent {
 
  @Input()
  rdvTitle : string;
  @Input()
  timeSlotStart : string;
  @Input()
  timeSlotEnd : string;
  @Input()
  descriptionRdv : string; 
  @Input()
  index: number


  constructor() { 
    this.rdvTitle = 'Defaault title';
    this.timeSlotStart = 'Defaault title';
    this.timeSlotEnd = '';
    this.descriptionRdv= ''; 
    this.index = 0
  }
}
