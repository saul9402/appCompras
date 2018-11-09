import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  campoBusqueda: FormControl;
  busqueda: string;

  proveedores: any[] = [];
  cargando = false;
  resultados = false;
  noresultados = false;

  constructor(private proveedoresService: ProveedoresService) {
   /* this.proveedoresService.getProveedores()
    .subscribe(proveedores => {
      console.log(proveedores);
      proveedores = proveedores.json();
      console.log(proveedores); 
      for(const id$ in proveedores){
        const p = proveedores[id$];
        p.id$ = id$;
        this.proveedores.push(proveedores[id$]);
      }
      this.cargando = false;
    });*/
   }

  ngOnInit() {
    this.campoBusqueda = new FormControl();
    this.campoBusqueda.valueChanges
      .subscribe(term => {
        this.busqueda = term;
        this.cargando = true;
        //se ha escrito algo en el campo
        if (this.busqueda.length !== 0){
          //busca proveedores
          this.proveedoresService.getProveedoresSearch(this.busqueda)
            .subscribe(proveedores => {
              //los recorre y los 
              proveedores = proveedores.json();
              this.proveedores = [];
              for(const id$ in proveedores){
                const p = proveedores[id$];
                p.id$ = id$;
                this.proveedores.push(proveedores[id$]);
              }
              //pregunta si el usuario escribio algo de ser asi y de no encontrar resultados mostrara algo
              if(this.proveedores.length < 1 && this.busqueda.length >= 1){
                this.noresultados = true;

              }else{
                this.noresultados = false;
              }
            })
            this.cargando=false;
            this.resultados=true;

        }else{
          //no ha escrito nada en el campo
          this.proveedores = [];
          this.cargando = false;
          this.resultados = false;
        }


      });

  }
  
}
