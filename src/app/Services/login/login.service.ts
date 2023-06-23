import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  users: Array<{ userName: string; password: string }>;

  constructor() {
    this.users = [{ userName: 'Test', password: 'test' }];
  }

  loginUser(
    userName: string | null | undefined,
    password: string | null | undefined
  ): boolean {
    const validUserName = userName ?? '';
    const validPassword = password ?? '';

    for (const user of this.users) {
      if (user.userName === validUserName && user.password === validPassword) {
        return true;
      }
    }

    return false;
  }

  addUser(user: { userName: string; password: string }) {
    this.users.push({
      userName: user.userName,
      password: user.password,
    });
  }
}
