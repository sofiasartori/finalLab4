import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TurnoService } from '../../servicios/turno.service';
import { Turno } from '../../clases/turno';
import { EspecialidadesService } from 'src/app/servicios/especialista.service';
import { ConsultoriosService } from 'src/app/servicios/consultorios.service';

@Component({
  selector: 'app-pedir-turno',
  templateUrl: './pedir-turno.component.html',
  styleUrls: ['./pedir-turno.component.css']
})
export class PedirTurnoComponent implements OnInit {

  @Output() SeCreoUnTurno: EventEmitter<any>= new EventEmitter<any>();
  nuevoTurno: Turno;
  miTurnoServicio: TurnoService;
  miEspecialista: EspecialidadesService;
  especialistas: any;
  idEspecialista: number;
  miConsultorioServicio: ConsultoriosService;
  
  constructor(serviceTurno: TurnoService, private builder: FormBuilder, serviceEspecialidad: EspecialidadesService, serviceConsultorio: ConsultoriosService) {
    this.miTurnoServicio = serviceTurno;
    this.miEspecialista = serviceEspecialidad;
    this.miConsultorioServicio = serviceConsultorio;
   }

  dia = new FormControl('', [
    Validators.required
  ]);
  
  hora = new FormControl('', [
    Validators.required
  ]);

  especialista = new FormControl('', [
    //Validators.required
  ]);

  
  altaTurnoForm: FormGroup = this.builder.group({
    dia: this.dia,
    hora: this.hora,
    especialista: this.especialista
  });


  ngOnInit() {
    this.traerEspecialistas();
  }

  crearTurno()
  {    
    this.SeCreoUnTurno.emit(this.nuevoTurno);
    this.nuevoTurno.id_especialista=this.idEspecialista;
    //id=select id_consultorio from consultorios where estado="libre";
    //this.nuevoTurno.id_consultorio=id;
    this.nuevoTurno.id_especialista=this.idEspecialista;
    this.nuevoTurno.cliente = localStorage.getItem('email');
    this.nuevoTurno.id_consultorio=Math.floor(Math.random()*(+7-+1)) + +1;
    
    this.miTurnoServicio.insertar('turnos/alta/', this.nuevoTurno);
    this.cambiarEstadoConsultorio();
    this.nuevoTurno=null;
  }
  hacerNuevoTurno()
  {
    this.nuevoTurno=new Turno("","", 0, "", "", 0, "", 0);

  }

  traerEspecialistas(){
    return this.miEspecialista.traertodos('especialistas/', '').then(data=>{
      this.especialistas=data;
    })
  }

  cambiarEstadoConsultorio(){
    this.miConsultorioServicio.cambiarEstado(this.nuevoTurno.id_consultorio , '','Proximo_a_ocupar');
  }

}
