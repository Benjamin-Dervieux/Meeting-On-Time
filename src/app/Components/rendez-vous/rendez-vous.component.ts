import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent {
  @Input()
  title: string;
  @Input()
  content: string;
  @Input()
  comments: Array<any>;
  @Input()
  index: number

  constructor() {
    this.title = 'Default title';
    this.content = 'Default content';
    this.comments = []
    this.index = 0
  }
}
