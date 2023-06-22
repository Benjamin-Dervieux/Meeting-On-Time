import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormRdvComponent } from './Components/formRdv/form-rdv/form-rdv.component';
import { PopUpComponent } from './Components/pop-up/pop-up.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { FormLoginComponent } from './Components/form-login/form-login.component';

import { FormTestRdvComponent } from './form-test-rdv/form-test-rdv.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    FormRdvComponent,
    PopUpComponent,
    ContactComponent,
    LoginComponent,
    FormLoginComponent,
    FormTestRdvComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
