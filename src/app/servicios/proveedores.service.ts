import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor() { }

  getProveedores(){
    return 'Mensaje desde el servicio';
  }
}
