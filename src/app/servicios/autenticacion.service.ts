import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute) { }

  registroUsuario(userdata){
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
      .catch(error => {
        console.log(error);
      })
  }

  inicioSesion(userdata){
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
        .then(response => {
          console.log(response);
          this.router.navigate(['/inicio']);
        })
        .catch(error => {
          console.log(error);
        })
  }

  //para saber si el usuario actual está autenticado
  isAuthenticated(){
    const user = firebase.auth().currentUser;
    if(user){
      return true;
    }else{
      return false;
    }
  }
  //para hacer el cierre de sesion
    logout(){
      firebase.auth().signOut();
    }
  


}
