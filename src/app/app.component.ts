import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appCompras';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCunuo3e8yG0BeuZzmVTEkDhGDO5QZZqWs",
      authDomain: "comprasapp-a57eb.firebaseapp.com"
    })
  }
}
