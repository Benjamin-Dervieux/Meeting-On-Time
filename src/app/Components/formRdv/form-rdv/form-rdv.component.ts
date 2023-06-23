import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormRdvService } from 'src/app/Services/formRdVService/form-rdv.service';

@Component({
  selector: 'app-form-rdv',
  templateUrl: './form-rdv.component.html',
  styleUrls: ['./form-rdv.component.css']
})
export class FormRdvComponent {
  //init title Form >> recevra le nom du form en fonction de l'appel.
  
  title : string;
  
  rdvForm = new FormGroup({
    rdvTitle : new FormControl(''),
    timeSlotStart : new FormControl(''),
    timeSlotEnd : new FormControl(''),
    descriptionRdv : new FormControl('') 
  })


  formRdvService = FormRdvService;

  constructor(formRdvService : FormRdvService){

    this.formRdvService = formRdvService;  
    
    this.title = "Réserver un créneau horaire";
         
  }
 
  onSubmitted() {
    //this.formRdvService.addRdv(this.formRdv.value)
    //this.formRdvEvent.emit(this.formRdv.value)
  }

}
