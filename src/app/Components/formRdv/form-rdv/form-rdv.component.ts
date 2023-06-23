import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormRdvService } from 'src/app/Services/formRdVService/form-rdv.service';

@Component({
  selector: 'app-form-rdv',
  templateUrl: './form-rdv.component.html',
  styleUrls: ['./form-rdv.component.css'],
})
export class FormRdvComponent {
  //init title Form >> recevra le nom du form en fonction de l'appel.

  title: string;

  rdvForm = new FormGroup({
    rdvTitle: new FormControl(''),
    timeSlotStart: new FormControl(''),
    timeSlotEnd: new FormControl(''),
    descriptionRdv: new FormControl(''),
  });

  constructor(private formRdvService: FormRdvService) {
    this.formRdvService = formRdvService;
    this.title = 'Book a time slot';
  }

  onSubmitted() {
    this.formRdvService.addRdv(this.rdvForm.value);
    // this.formRdvService.emit(this.rdvForm.value)
    console.log(this.rdvForm.value);
    console.log(this.formRdvService.rendezVous);
  }
}
