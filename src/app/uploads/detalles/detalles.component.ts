//con el import de Input se pueden recibir datos de otros componentes
import { Component, OnInit, Input } from '@angular/core';
import { Archivo } from './../file.modal';
import { Observable } from 'rxjs';
import { LoadfileService } from '../../servicios/loadfile.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input() upload: Archivo;


  constructor(private loadfileService: LoadfileService) { }

  ngOnInit() {
  }

  deleteUpload(upload){
    this.loadfileService.deleteUpload(upload);

  }

}
