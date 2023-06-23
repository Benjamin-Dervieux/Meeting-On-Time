import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormRdvService {

  rendezvous : Array<any>;

  constructor() { 

  }

  addRdv(formRdv: any) {
    this.rendezvous.push({

      rdvTitle : this.formRdv.rdvTitle ,
      timeSlotStart : this.formRdv.timeSlotStart ,
      timeSlotEnd : this.formRdv.timeSlotEnd ,
      descriptionRdv : this.formRdv.descriptionRdv 
    
    })
  }

  updateRdV(rendezvous: Rdv, rdvIndex: number): void {
    this.rendezvous[rdvIndex].rdvTitle = rendezvous.rdvTitle,
    this.rendezvous[rdvIndex].timeSlotStart = rendezvous.timeSlotStart,
    this.rendezvous[rdvIndex].timeSlotEnd = rendezvous.timeSlotEnd,

  }

  deleteRdv(articleIndex: number): void {
    this.articles.splice(articleIndex, 1)
  }

 
}

interface Rdv {
  rdvTitle : string ,
  timeSlotStart : string ,
  timeSlotEnd : string ,
  descriptionRdv : string
}

