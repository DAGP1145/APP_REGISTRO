import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'; //
import {Router, NavigationExtras} from '@angular/router' ;
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

   cards = [
    { title: 'ARQUITECTURA', content: 'Este es el contenido desplegado del ion-card 1', isExpanded: false },
    { title: 'CALIDAD DE SOFTWARE', content: 'Este es el contenido desplegado del ion-card 2', isExpanded: false },
    { title: 'DISEÑO DE PROTOTIPOS', content: 'Este es el contenido desplegado del ion-card 3', isExpanded: false },
    { title: 'ESTADISTICA DESCRIPTIVA', content: 'Este es el contenido desplegado del ion-card 4', isExpanded: false },
    { title: 'ETICA PARA EL TRABAJO', content: 'Este es el contenido desplegado del ion-card 5', isExpanded: false },
    { title: 'INGLES INTERMEDIO', content: 'Este es el contenido desplegado del ion-card 6', isExpanded: false },
    { title: 'PROCESO DE PORTAFOLIO', content: 'Este es el contenido desplegado del ion-card 7', isExpanded: false },
    { title: 'PROGRAMACIÓN DE APLICACIONES MOVILES', content: 'Este es el contenido desplegado del ion-card 8', isExpanded: false }
  ];
  
  toggleCard(index: number) {
    this.cards[index].isExpanded = !this.cards[index].isExpanded;
  }

  ngOnInit() {
  }

}
