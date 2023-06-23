import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/Services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input()
  userName: string;
  @Input()
  password: string;

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService, private router: Router) {
    this.userName = '';
    this.password = '';
    this.loginService = loginService;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userName = this.loginForm.value.userName;
      const password = this.loginForm.value.password;

      const loggedIn = this.loginService.loginUser(userName, password);
      if (loggedIn) {
        alert('You are connected 🎉 ');
        this.router.navigate(['']);
      } else {
        alert('Your user name or password are false');
      }
    }
  }
}
