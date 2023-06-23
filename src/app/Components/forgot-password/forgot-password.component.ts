import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  newPasswordForm = new FormGroup({
    newPassword: new FormControl(''),
  });

  onSubmit() {
    console.log(this.newPasswordForm.value);
  }
}
