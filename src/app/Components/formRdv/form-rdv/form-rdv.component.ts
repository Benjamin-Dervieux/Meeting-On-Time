import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormRdvService } from 'src/app/Services/formRdVService/form-rdv.service';

@Component({
  selector: 'app-form-rdv',
  templateUrl: './form-rdv.component.html',
  styleUrls: ['./form-rdv.component.css']
})
export class FormRdvComponent {
  //init title Form >> recevra le nom du form en fonction de l'appel.
  title : string;
  choiceHour : boolean;

  formRdvService = FormRdvService;

  constructor(formRdvService : FormRdvService){

    this.formRdvService = formRdvService;  
    
    this.title = "Réserver un créneau horaire";

    this.choiceHour = false ;     
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

  onSubmitted() {
    //this.formRdvService.onSubmitted(this.formRdv.value)
    //this.formRdvEvent.emit(this.formRdv.value)
  }

}
