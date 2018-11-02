import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//import 'rxjs/Rx'; //en el curso viene asi pero el que jaló es el de abajo
import * as rx from 'rxjs/Rx';
//y esta linea para usar el map
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  //se pone la url de la base de datos y despues el nombre de la 'tabla' o coleccion con extension
  presURL = 'https://comprasapp-a57eb.firebaseio.com/presupuestos.json';

  constructor(private http: Http) { }


  postPresupuesto(presupuesto: any){
    //se convierte e cadena lo que se va a enviar
    const newPres = JSON.stringify(presupuesto);
    //se crean los headers para que lo que recibe esta peticion sepa como procesarlo
    const headers = new Headers({
      'Content-Type':'application/json'
    })
    //se hace la peticion con el objeto declarado arriba de http
    //se manda la url, la variable a guardar, en este caso el presupuesto y los headers
    return this.http.post(this.presURL, newPres, {headers})
        map((res: Response) => {
        console.log(res.json());
        return res.json();
      });
  }
}
