import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//import 'rxjs/Rx'; //en el curso viene asi pero el que jaló es el de abajo
import * as rx from 'rxjs/Rx';
//y esta linea para usar el map
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  provURL = 'https://comprasapp-a57eb.firebaseio.com/proveedores.json';
  proURL = 'https://comprasapp-a57eb.firebaseio.com/proveedores';


  
  constructor(private http: Http) { }

  postProveedor(proveedor: any){
    //se convierte e cadena lo que se va a enviar
    const newPres = JSON.stringify(proveedor);
    //se crean los headers para que lo que recibe esta peticion sepa como procesarlo
    const headers = new Headers({
      'Content-Type':'application/json'
    })
    //se hace la peticion con el objeto declarado arriba de http
    //se manda la url, la variable a guardar, en este caso el proveedor y los headers
    return this.http.post(this.provURL, newPres, {headers})
       // map((res: Response) => {
       // console.log(res.json());
        //return res.json();
      //});
  }

  getProveedores(){
    /*this.http.get(this.presURL).map((res: Response) => {
      alert( res.json());
    })*/
    return this.http.get(this.provURL);
        //map((res: Response) => {
    //alert(res.json());
    //return res.json();
   //});
  }

  getProveedor(id$: string){
    const url = `${this.proURL}/${id$}.json`;
    return this.http.get(url)/*.sjon*/;
  }

  putProveedor(proveedor: any, id$: string){
    const newpre = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type' : 'application/json'
    })
    const url = `${this.proURL}/${id$}.json`;
    return this.http.put(url, newpre, {headers});
  }

  delProveedor(id$: string){
    const url = `${this.proURL}/${id$}.json`;
    return this.http.delete(url);
  }



}
