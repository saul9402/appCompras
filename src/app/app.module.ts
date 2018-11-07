import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProveedoresService } from  './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';
//Se agrega el nuevo modulo al modulo raíz para poder usarlo en la aplicacion 
import { FacturasModule } from './facturas/facturas.module';
//tambipen se importa el componente y queda listo
import { AddfraComponent } from './facturas/facturas/addfra/addfra.component';
import { FacturasComponent } from './facturas/facturas/facturas/facturas.component';

  const routes: Routes =[
    {path: '', component: InicioComponent},
    {path: 'proveedores', component: ProveedoresComponent,
      canActivate: [GuardService] },
    {path: 'addprovee', component: AddproveeComponent,
    canActivate: [GuardService]},
    {path: 'addpres', component: AddpresComponent,
    canActivate: [GuardService]},
    {path: 'presupuestos', component: PresupuestosComponent,
    canActivate: [GuardService]},
    {path: 'editpres/:id', component: EditpresComponent,
    canActivate: [GuardService]},
    {path: 'registro', component: RegistroComponent},
    {path: 'inises', component: InisesComponent},
    { path: 'facturas', component: FacturasComponent },
    {path: '**', component: InicioComponent}
  ];

@NgModule({
  //En las declarations se agregan los componentes que vayamos creando
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent
  ],
  //en import se agregan las clases angular a usar en la aplicacion
  imports: [
    BrowserModule,
    //se agrega la lista de rutas a gestionar por este componente
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //se agrega aqui también y queda listo para usar
    FacturasModule
  ],
  //En providers se agregan los servicios
  providers: [ProveedoresService,
              PresupuestosService,
              AutenticacionService,
              GuardService],
  //Indica cual es el componente raíz
  bootstrap: [AppComponent]
})
export class AppModule { }
