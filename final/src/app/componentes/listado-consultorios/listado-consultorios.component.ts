import { Component, OnInit } from '@angular/core';
import { ConsultoriosService } from 'src/app/servicios/consultorios.service';
import { ColorDirective } from '../../color.directive';

@Component({
  selector: 'app-listado-consultorios',
  templateUrl: './listado-consultorios.component.html',
  styleUrls: ['./listado-consultorios.component.css']
})
export class ListadoConsultoriosComponent implements OnInit {

  listado: any;
  miConsultorioServicio: ConsultoriosService;
  

  constructor(serviceConsultorio: ConsultoriosService) {
    this.miConsultorioServicio = serviceConsultorio;
  }
  ngOnInit() {
    
    this.TraerTodos();
  }
  TraerTodos() {
    this.miConsultorioServicio.traertodos('consultorios/', '').then(data => {
      this.listado = data
      this.limpiarAtencion();
      console.log(data)
    })
  }

  limpiarAtencion(){
    for (let i = 0; i < 8; i++) {
      let atencion: string = this.listado[i].atencion;
      atencion = atencion.replace(/_/g," ");
      this.listado[i].atencion=atencion;      

    }
  }

}
