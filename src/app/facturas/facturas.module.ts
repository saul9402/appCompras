import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AddfraComponent } from './facturas/addfra/addfra.component';

//se deben de importar los modulos que se deseen usar, a´´un cuando ya estén en el componente raíz
//puesto que los componentes que gestiona este modulo no los podrán ver

@NgModule({
  imports: [
    CommonModule,
    //se agregan los modulos para poder usarlos
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [AddfraComponent],
  //se agregan servicios de forma manual
  providers: []
})
export class FacturasModule { }
