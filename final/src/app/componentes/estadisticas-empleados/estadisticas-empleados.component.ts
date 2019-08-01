import { Component, OnInit } from '@angular/core';
import { registroUsuarioService } from 'src/app/servicios/registro-usuario.service';
import { EspecialidadService } from 'src/app/servicios/especialidad.service';
import { TurnoService } from 'src/app/servicios/turno.service';


@Component({
  selector: 'app-estadisticas-empleados',
  templateUrl: './estadisticas-empleados.component.html',
  styleUrls: ['./estadisticas-empleados.component.css']
})
export class EstadisticasEmpleadosComponent implements OnInit {

  miServicio: registroUsuarioService;
  listadoUsuarios: any;
  conexioness:string;
  turnoss:string;
  especialidadServicio: EspecialidadService;
  listadoEspecialidad: any;
  idEspecialidad:number;
  turnoServicio: TurnoService;
  cantidadturnos: number;
  listadoTurnos: any;

  constructor(serviceUsuario: registroUsuarioService, serviceEspecialidad: EspecialidadService, serviceTurno: TurnoService) {
    this.miServicio=serviceUsuario;
    this.especialidadServicio = serviceEspecialidad;
    this.turnoServicio=serviceTurno;
   }

  ngOnInit() {
    this.traerLogs();
  }

  traerLogs(){
    this.miServicio.traertodos('usuarios/', '').then(data=>{
      this.listadoUsuarios = data;
    })
  }

  traerEspecialidad(){
    this.especialidadServicio.traer('especialidad/', '').then(data=>{
      this.listadoEspecialidad = data;
    })
  }

  conexiones(){
    this.conexioness='ok';
    this.turnoss='';
  }

  turnos(){
    this.conexioness='';
    this.turnoss='ok';
    this.traerEspecialidad();
  }

  traerTurnos(){
    this.turnoServicio.traerCantidadFechas('turnos/cantidad/' + this.idEspecialidad).then(data=>{
      this.listadoTurnos=data;
    })
  }

}
