import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
//se importa el servicio
import { PresupuestosService } from '../../servicios/presupuestos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editpres',
  templateUrl: './editpres.component.html',
  styleUrls: ['./editpres.component.css']
})
export class EditpresComponent implements OnInit {

  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;

  id: string;
 
  constructor(
    private pf: FormBuilder, 
    private presupuestoService: PresupuestosService,
    private router: Router,
    private ativatedRouter: ActivatedRoute) {
      this.ativatedRouter.params
        .subscribe(parametros => {
          this.id = parametros['id'];
          this.presupuestoService.getPrespuesto(this.id)
            .subscribe( presupuesto => {
              this.presupuesto = presupuesto.json();
            })
        })
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
    this.presupuestoService.putPresupuesto(this.presupuesto, this.id)
      .subscribe(newpres => {
        //sirve para redirigir, :3
        this.router.navigate(['/presupuestos']);
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
