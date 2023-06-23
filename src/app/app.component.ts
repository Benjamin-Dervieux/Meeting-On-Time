import { Component, OnInit } from '@angular/core';
import {RendezVousService} from './Services/rendezVous/rendez-vous.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  rdv! : Array <any>


  rendezVousService : RendezVousService;

  constructor(rendezVousService : RendezVousService) {
    this.rendezVousService = rendezVousService; 
  }

  ngOnInit(): void {
    this.rdv = this.rendezVousService.rdvTable;
  }
}


