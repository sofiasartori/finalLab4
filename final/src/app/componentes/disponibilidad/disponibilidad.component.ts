import { Component, OnInit } from '@angular/core';
import { Disponibilidad } from 'src/app/clases/disponibilidad';
import { EspecialidadService } from 'src/app/servicios/especialidad.service';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.css']
})
export class DisponibilidadComponent implements OnInit {
  disponibilidad: Disponibilidad;
  dias = [{}];
  miEspecialidadServicio:EspecialidadService;
  especialidad:any;
  constructor(serviceEspecialidad: EspecialidadService) {
    this.miEspecialidadServicio=serviceEspecialidad;
   }

  ngOnInit() {
    this.traerEspecialidad();
  }
  agregarDia(){
    if(this.dias.length<6)this.dias.push({})
  }

  traerEspecialidad(){
      return this.miEspecialidadServicio.traer('especialidad/', '').then(data=>{
        this.especialidad=data;
      });
  }

  altaDisponibilidad(){
    
  }
}
