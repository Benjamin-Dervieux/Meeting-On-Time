import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  rdvTable : Array <any>
  

  constructor() { 
    this.rdvTable = [];
  }

  addRdv( rdv : Rdv ): void {
    this.rdvTable.push({
      rdvTitle : rdv.rdvTitle,
      timeSlotStart : rdv.timeSlotStart,
      timeSlotEnd : rdv.timeSlotEnd,
      descriptionRdv : rdv.descriptionRdv 
    
    })
  }

  updateRdV(rdv: Rdv, rdvIndex: number): void {
    this.rdvTable[rdvIndex].rdvTitle = rdv.rdvTitle,
    this.rdvTable[rdvIndex].timeSlotStart = rdv.timeSlotStart,
    this.rdvTable[rdvIndex].timeSlotEnd = rdv.timeSlotEnd,
    this.rdvTable[rdvIndex].descriptionRdv = rdv.descriptionRdv

  }

  deleteRdv(articleIndex: number): void {
    this.rdvTable.splice(articleIndex, 1)
  }
 
}

interface Rdv {
  
  rdvTitle : string ,
  timeSlotStart : string ,
  timeSlotEnd : string ,
  descriptionRdv : string
}







