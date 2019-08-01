import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/servicios/especialidad.service';

@Component({
  selector: 'app-estadisticas-especialidades',
  templateUrl: './estadisticas-especialidades.component.html',
  styleUrls: ['./estadisticas-especialidades.component.css']
})
export class EstadisticasEspecialidadesComponent implements OnInit {

  mass: string;
  menoss: string;
  peorr: string;
  mejorr: string;
  miEspecialidadServicio: EspecialidadService;
  especialidadmas: string;
  especialidadmenos: string;
  encuesta: any;
  peorEncuesta: any;

  constructor(serviceEspecialidad:EspecialidadService) {
    this.miEspecialidadServicio=serviceEspecialidad;
   }

  ngOnInit() {
  }

  mas(){
    this.mass='ok';
    this.menoss='';
    this.peorr='';
    this.mejorr='';
    this.miEspecialidadServicio.traer('especialidad/mas/', '').then(data=>{
      this.especialidadmas = data[0].mas;
    })
  }

  menos(){
    this.mass='';
    this.menoss='ok';
    this.peorr='';
    this.mejorr='';
    this.miEspecialidadServicio.traer('especialidad/menos/', '').then(data=>{
      this.especialidadmenos = data[0].mas;
    })
  }

  peor(){
    this.mass='';
    this.menoss='';
    this.peorr='ok';
    this.mejorr='';
    this.miEspecialidadServicio.traer('especialidad/peor/', '').then(data=>{
      this.peorEncuesta = data;
    })
  }

  mejor(){
    this.mass='';
    this.menoss='';
    this.peorr='';
    this.mejorr='ok';
    this.miEspecialidadServicio.traer('especialidad/mejor/', '').then(data=>{
      this.encuesta = data;
    })
  }


}
