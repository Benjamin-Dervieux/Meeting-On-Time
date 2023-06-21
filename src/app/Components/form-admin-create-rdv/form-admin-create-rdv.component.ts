import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormAdminCreateRdvService } from '../../Services/formAdminService/form-admin.service';

@Component({
  selector: 'app-form-admin-create-rdv',
  templateUrl: './form-admin-create-rdv.component.html',
  styleUrls: ['./form-admin-create-rdv.component.css']
})
export class FormAdminCreateRdvComponent {
  rdvForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private FormAdminCreateRdvService: FormAdminCreateRdvService) {
    this.rdvForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  submitForm(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    else {
      //your logic
    }
  }
}
export interface FormAdminCreateRdv {
  name: string;
  email: string;
  date: Date;
}
