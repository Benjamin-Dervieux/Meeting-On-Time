import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-rdv',
  templateUrl: './form-rdv.component.html',
  styleUrls: ['./form-rdv.component.css']
})
export class FormRdvComponent {
  //init title Form >> recevra le nom du form en fonction de l'appel.
  title : string;
  choiceHour : boolean;

  constructor(){ 
    this.title = "Réserver un créneau horaire";
    this.choiceHour = false ; // t    
  }

  formRdv = new FormGroup({
    rdvTitle: new FormControl(''),
    timeSlotStart: new FormControl(''),
    timeSlotEnd : new FormControl (''),
    descriptionRdv : new FormControl ('')
  })
 
  activeChoiceHour () : void {
    if (!this.choiceHour) {
      this.choiceHour = !this.choiceHour; 
    }
  }
}
