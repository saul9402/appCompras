import { Component, OnInit } from '@angular/core';
/*se importa esto para poder usar la libreria
no olvidar que se uso el comando npm install firebase angularfirebase2 para instalar la libreria y poder importarla*/
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//se agrega la interfaz OnInit
export class AppComponent implements OnInit {
  title = 'appCompras';

  ngOnInit(){
    /*asi se inicializa la app para poder conectar con el servicio de autenticacion de usuarios de
    firebase. Los datos de abajo se obtiene directamente de la pagina de firebase y hay que estar logeado*/
    firebase.initializeApp({
      apiKey: "AIzaSyCunuo3e8yG0BeuZzmVTEkDhGDO5QZZqWs",
      authDomain: "comprasapp-a57eb.firebaseapp.com"
    })
  }
}
