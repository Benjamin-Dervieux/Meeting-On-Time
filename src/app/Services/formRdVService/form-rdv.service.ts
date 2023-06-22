import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormRdvService {

  rendezvous : Array<any>;

  constructor() { 

  }

  addRdv(formRdv: any) {
    this.formRdv.push({
      rdvTitle : this.formRdv.rdvTitle ,
      timeSlotStart : this.formRdv.timeSlotStart ,
      timeSlotEnd : this.formRdv.timeSlotEnd ,
      descriptionRdv : this.formRdv.descriptionRdv 
    })
  }

  updateRdV(rendezvous: Rdv, rdvIndex: number): void {
    this.rendezvous[rdvIndex].title = rendezvous.rdvTitle
    this.articles[articleIndex].content = article.content
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

