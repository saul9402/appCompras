import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
//se importa el servicio
import { PresupuestosService } from '../../servicios/presupuestos.service';
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent implements OnInit {

  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;

  proveedores: any[] = [];
 
 
  //se declara el servicio como parte del componente
  constructor(private pf: FormBuilder, 
    private presupuestoService: PresupuestosService,
    private proveedoresService: ProveedoresService) {
        this.proveedoresService.getProveedores()
          .subscribe(proveedores => {
            console.log(proveedores);
            proveedores = proveedores.json();
            console.log(proveedores); 
            for(const id$ in proveedores){
              const p = proveedores[id$];
              p.id$ = id$;
              this.proveedores.push(proveedores[id$]);
            }
          });
     }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required],
      fecha: ['', Validators.required],
      concepto: ['', [Validators.required, Validators.minLength(10)]],
      base: ['', Validators.required],
      tipo: ['', Validators.required],
      iva: this.iva,
      total: this.total
    });
    this.onChange();
  }

  onChange(): void{
    this.presupuestoForm.valueChanges.subscribe(valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base*this.tipo);
    })
  }

  onSubmit(){
    this.presupuesto = this.savePresupuesto();
    //se manda a llamar al metodo postPresupoesto del objeto presupuestoService y se envia como parametro
    //el objeto que recibe y procesa el formulario (preupuesto)
    this.presupuestoService.postPresupuesto(this.presupuesto).subscribe(newpres => {
      //alert(newpres.json());
    });
    this.presupuestoForm.reset();
  }
  savePresupuesto(){
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value,
    }
    return savePresupuesto;
  }

}
