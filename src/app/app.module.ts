import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProveedoresService } from  './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { FormsModule } from '@angular/forms';

  const routes: Routes =[
    {path: '', component: InicioComponent},
    {path: 'proveedores', component: ProveedoresComponent},
    {path: 'addprovee', component: AddproveeComponent},
    {path: '**', component: InicioComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
