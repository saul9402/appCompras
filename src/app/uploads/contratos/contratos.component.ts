import { Component, OnInit } from '@angular/core';
import { LoadfileService } from '../../servicios/loadfile.service';
import { Archivo } from './../file.modal';
import { AngularFireList }  from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  //uploads: any[];
  uploads: Observable<Archivo[][]>;
  //uploads: Observable<any[]>;
  //uploads: any[];

  constructor(private loadfileService: LoadfileService) { 

  }

  ngOnInit() {
    //this.uploads = this.loadfileService.getUploads();
    this.uploads = this.loadfileService.getUploads().valueChanges();
   /* this.loadfileService.getUploads().snapshotChanges().subscribe(data => {
      this.uploads = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        console.log(a);
        this.uploads.push(a as Archivo);
      })
    })*/
  }

}

