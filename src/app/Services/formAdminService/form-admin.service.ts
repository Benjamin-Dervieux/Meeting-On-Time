import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormAdminCreateRdv } from '../../Components/form-admin-create-rdv/form-admin-create-rdv.component';

@Injectable({
  providedIn: 'root'
})
export class FormAdminCreateRdvService {
  private apiUrl = 'http://localhost:4200/';

  constructor(private http: HttpClient) {}

  createRdv(formData: FormAdminCreateRdv): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
export interface Rdv {
  firstName: string;
  lastName: string;
  date: Date;
  
}
