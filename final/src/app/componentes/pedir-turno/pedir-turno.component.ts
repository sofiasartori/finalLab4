import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TurnoService } from '../../servicios/turno.service';
import { Turno } from '../../clases/turno';
import { EspecialidadesService } from 'src/app/servicios/especialista.service';
import { ConsultoriosService } from 'src/app/servicios/consultorios.service';
import {MatDialog} from '@angular/material/dialog';
import { TratamientoService } from 'src/app/servicios/tratamiento.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

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
  idTratamiento: number;
  miConsultorioServicio: ConsultoriosService;
  miTratamientoServicio: TratamientoService;
  tratamiento: any;
  clientes: any;
  recepcionista: string='';
  cliente: string;
  exampleModal:any;
  
  constructor(serviceTurno: TurnoService, private builder: FormBuilder, serviceEspecialidad: EspecialidadesService, serviceConsultorio: ConsultoriosService, private dialogo: MatDialog, serviceTratamiento: TratamientoService, public ngxSmartModalService: NgxSmartModalService) {
    this.miTurnoServicio = serviceTurno;
    this.miEspecialista = serviceEspecialidad;
    this.miConsultorioServicio = serviceConsultorio;
    this.miTratamientoServicio = serviceTratamiento;
   }

  dia = new FormControl('', [
    Validators.required
  ]);
  
  hora = new FormControl('', [
    Validators.required
  ]);

  especialista = new FormControl('', [
    Validators.required
  ]);

  
  altaTurnoForm: FormGroup = this.builder.group({
    dia: this.dia,
    hora: this.hora,
    especialista: this.especialista
  });


  ngOnInit() {
    if(localStorage.getItem('tipo')==="recepcionista")
      this.recepcionista='ok';
    this.traerEspecialistas();
    this.traerTratamientos();
    this.traerClientes();
  }

  crearTurno()
  {    
    this.SeCreoUnTurno.emit(this.nuevoTurno);
    this.nuevoTurno.id_tratamiento=this.idTratamiento;
    this.nuevoTurno.id_especialista=this.idEspecialista;
    if(!this.recepcionista)
      this.nuevoTurno.cliente = localStorage.getItem('email');
    else{
      this.nuevoTurno.cliente = this.cliente;
      this.nuevoTurno.recepcionista = localStorage.getItem('email');
    }      
    this.nuevoTurno.id_consultorio=Math.floor(Math.random()*(+7-+1)) + +1;
    
    this.miTurnoServicio.insertar('turnos/alta/', this.nuevoTurno);
    this.cambiarEstadoConsultorio();
    this.ngxSmartModalService.open('myModal');
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
    this.miConsultorioServicio.cambiarEstado(this.nuevoTurno.id_consultorio , 'p','Proximo_a_ocupar');
  }

  traerTratamientos(){
    this.miTratamientoServicio.traer('tratamiento/', '').then(data=>{
      this.tratamiento=data;
    })
  }

  traerClientes(){
    return this.miEspecialista.traertodos('especialistas/clientes/', '').then(data=>{
      this.clientes=data;
    })
  }

}
