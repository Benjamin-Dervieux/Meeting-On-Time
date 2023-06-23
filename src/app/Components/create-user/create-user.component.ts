import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/Services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  createUserForm = new FormGroup({
    newUserName: new FormControl(''),
    newUserPassword: new FormControl(''),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  addUser() {
    const newUser = {
      userName: this.createUserForm.value.newUserName || '',
      password: this.createUserForm.value.newUserPassword || '',
    };

    this.loginService.addUser(newUser);
    alert('Your account has been created 🎉 ');
    this.router.navigate(['']);
  }
}
