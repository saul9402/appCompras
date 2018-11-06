import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private autenticacionService:AutenticacionService) { }

  //implementando el metodo de la interfaz CanActivate se pueden porteger las rutas para evita
  //que entren sin inicio de sesion. Una vez implementado este metodo se agrega en el app.module
  //y ya, xD
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.autenticacionService.isAuthenticated();
  }

}
