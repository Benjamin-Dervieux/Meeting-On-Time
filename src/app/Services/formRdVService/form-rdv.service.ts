import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormRdvService {

  rendezVous : Array<any>;

  constructor() { 

  }

  addRdv(formRdv: any) {
    this.rendezVous.push({

      rdvTitle : this.formRdv.rdvTitle ,
      timeSlotStart : this.formRdv.timeSlotStart ,
      timeSlotEnd : this.formRdv.timeSlotEnd ,
      descriptionRdv : this.formRdv.descriptionRdv 
    
    })
  }

  updateRdV(rendezvous: Rdv, rdvIndex: number): void {
    this.rendezVous[rdvIndex].rdvTitle = rendezvous.rdvTitle,
    this.rendezVous[rdvIndex].timeSlotStart = rendezvous.timeSlotStart,
    this.rendezVous[rdvIndex].timeSlotEnd = rendezvous.timeSlotEnd,

  }

  deleteRdv(articleIndex: number): void {
    this.rendezVous.splice(articleIndex, 1)
  }

 
}

interface Rdv {
  rdvTitle : string ,
  timeSlotStart : string ,
  timeSlotEnd : string ,
  descriptionRdv : string
}

