import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  popUpStatu : boolean ; 

  constructor(){ 
    this.popUpStatu = false;
  }

  openPopUp (/**eventClick */) {
    //if (/** !popUpStatu */){}
      
    

  }

  closePopUp(){

  }
// let modalAlreadyShowed = false

// window.addEventListener('scroll', function(e) {
//   if( ! modalAlreadyShowed ) {
//     setTimeout( () => {
//       document.getElementById('modal').style.display = 'block'
//     }, 2000 )
//     modalAlreadyShowed = true
//   }
// });

// document.getElementById('modal-close').addEventListener('click', function(e) {
//   document.getElementById('modal').style.display = 'none'
// })

}

