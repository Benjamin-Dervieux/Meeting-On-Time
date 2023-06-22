import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { FormTestRdvComponent } from './form-test-rdv/form-test-rdv.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'contact', component: ContactComponent },
  { path:'formRdv', component: FormTestRdvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
