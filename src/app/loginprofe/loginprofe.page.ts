import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginprofe',
  templateUrl: './loginprofe.page.html',
  styleUrls: ['./loginprofe.page.scss'],
})
export class LoginprofePage implements OnInit {
//  isCardVisible: boolean = false;
  
  constructor() {
    
  }
//*
//  isExpanded = false;
//
//  toggleCard() {
//    this.isExpanded = !this.isExpanded; // Alterna el estado entre expandido y contraído
//  }
//
cards = [
  { title: 'INTRODUCCION A LA PROGRAMACIÓN', content: 'Este es el contenido desplegado del ion-card 1', isExpanded: false },
  { title: 'PROGRAMACIÓN ORIENTADA A OBJETOS', content: 'Este es el contenido desplegado del ion-card 2', isExpanded: false },
  { title: 'REDES DE COMPUTADORES II', content: 'Este es el contenido desplegado del ion-card 3', isExpanded: false },
  { title: 'DESARROLLO WEB', content: 'Este es el contenido desplegado del ion-card 4', isExpanded: false },
  { title: 'MATEMÁTICAS DISCRETAS', content: 'Este es el contenido desplegado del ion-card 5', isExpanded: false },
  { title: 'SISTEMAS OPERATIVOS', content: 'Este es el contenido desplegado del ion-card 6', isExpanded: false },
  { title: 'BASE DE DATOS I', content: 'Este es el contenido desplegado del ion-card 7', isExpanded: false },
  { title: 'PROGRAMACIÓN DE APLICACIONES MOVILES', content: 'Este es el contenido desplegado del ion-card 8', isExpanded: false }
];

toggleCard(index: number) {
  this.cards[index].isExpanded = !this.cards[index].isExpanded;
}
  
  ngOnInit() {
  }

}



