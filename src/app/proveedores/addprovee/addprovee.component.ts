import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  //Con esto se usan los componente de angular para recibir el objeto del formulario. Se usa el id del html para enlazar el formulario con este archivo
  @ViewChild('formpro') formpro: NgForm;
  proveedor: any;

  constructor() { 
  this.proveedor = {
    nombre: '',
    cif: '',
    direccion: '',
    cp: '',
    localidad: '',
    provincia:'',
    telefono: null,
    email: '',
    contacto: ''}
  }

  ngOnInit() {
  }

  onSubmit(){
    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.cif = this.formpro.value.cif;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.cp = this.formpro.value.cp;
    this.proveedor.localidad = this.formpro.value.localidad;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.email = this.formpro.value.email;
    this.proveedor.contacto = this.formpro.value.contacto;
    
    this.formpro.reset();
  }

}
