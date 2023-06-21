import { Component } from '@angular/core';

@Component({
  selector: 'app-form-rdv',
  templateUrl: './form-rdv.component.html',
  styleUrls: ['./form-rdv.component.css']
})
export class FormRdvComponent {
  title :string;


  constructor(){
    this.title = "Réserver un créneau horaire"
  }

  // interface Rdv {
    
  // }

}
