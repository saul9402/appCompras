import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  presupuestos: any[] = [];

  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos()
      .subscribe(presupuestos => {
        console.log(presupuestos);
        presupuestos = presupuestos.json();
        console.log(presupuestos); 
        for(const id$ in presupuestos){
          const p = presupuestos[id$];
          p.id$ = id$;
          this.presupuestos.push(presupuestos[id$]);
        }
      });
   }

  ngOnInit() {
  }

}
