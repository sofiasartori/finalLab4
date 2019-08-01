import { Component, OnInit } from '@angular/core';
import { TurnoService } from 'src/app/servicios/turno.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EspecialidadService } from 'src/app/servicios/especialidad.service';

@Component({
  selector: 'app-estadisticas-turnos',
  templateUrl: './estadisticas-turnos.component.html',
  styleUrls: ['./estadisticas-turnos.component.css']
})
export class EstadisticasTurnosComponent implements OnInit {
  miTurnoServicio: TurnoService;
  cantidad: any = '';
  fecha_desde: string;
  fecha_hasta: string;
  fechass:string;
  quien:string;
  listado: any;
  recepcionista: string;
  turnoss: string;
  turnose:string;
  turnosc:string;
  listadoEspecialidad: any;
  especialidadServicio: EspecialidadService;
  idEspecialidad:number;
  listadoTurnosE: any;

  constructor(serviceTurno: TurnoService, private builder: FormBuilder, private serviceEspecialidades: EspecialidadService) {
    this.miTurnoServicio=serviceTurno;
    this.especialidadServicio=serviceEspecialidades;
   }

  fechaDesde = new FormControl('', [
    Validators.required
  ]);
  
  fechaHasta = new FormControl('', [
    Validators.required
  ]);

  fechasForm: FormGroup = this.builder.group({
    fechaDesde: this.fechaDesde,
    fechaHasta: this.fechaHasta
  });

  ngOnInit() {
  }

  buscar(){
    this.miTurnoServicio.traerCantidadFechas('turnos/cantidad/fechas/' + this.fecha_desde + '/' + this.fecha_hasta).then(data=>{
      this.cantidad=data[0];
    });  
  }

  fechas(){
    this.turnoss='';
    this.fechass='ok';
  }

  turnosP(){
    this.quien='cliente';
    this.turnoss='ok';
    this.fechass='';
    this.turnose='';
    this.turnosc='';
    this.traerTurnos(this.quien);    
  }

  turnosR(){
    this.fechass='';
    this.turnose='';
    this.turnosc='';
    this.recepcionista='ok';
    this.quien='recepcionista';
    this.turnoss='ok';
    this.traerTurnos(this.quien);
  }

  turnosE(){
    this.fechass='';
    this.turnoss='';
    this.turnosc='';
    this.turnose='ok';
    this.traerEspecialidades();
    
  }

  turnosC(){
    this.fechass='';
    this.turnoss='';
    this.turnose='';
    this.turnosc='ok';
    this.traerEspecialidades();
  }

  traerEspecialidades(){
    this.especialidadServicio.traer('especialidad/', '').then(data=>{
      this.listadoEspecialidad = data;
    })
  }

  trearTurnos(){
    if(this.turnose)
      this.traerTurnosE(this.idEspecialidad);
    else if(this.turnosc)
      this.traerTurnosC(this.idEspecialidad);
  }

  traerTurnos(quien: string){
    this.miTurnoServicio.traertodos('turnos/quien/', quien).then(data=>{
      this.listado=data;
    })
  }

  traerTurnosE(id:number){
    this.miTurnoServicio.traertodos('turnos/turnos/' + id, '').then(data=>{
      this.listadoTurnosE =data;
    })
  }

  traerTurnosC(id:number){
    this.miTurnoServicio.traertodos('turnos/turnos/cancelados/' + id, '').then(data=>{
      this.listadoTurnosE =data;
    })
  }

}
