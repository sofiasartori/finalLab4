import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TurnoService } from '../../servicios/turno.service';
import { Turno } from '../../clases/turno';
import { EspecialidadesService } from 'src/app/servicios/especialista.service';
import { ConsultoriosService } from 'src/app/servicios/consultorios.service';
import {MatDialog} from '@angular/material/dialog';
import { TratamientoService } from 'src/app/servicios/tratamiento.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DiponibilidadService } from 'src/app/servicios/diponibilidad.service';

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
  especialidades = [];
  especialidad
  dia
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
  turnosVacios = [];
  okTurnos: string;
  listado: any = [];

  constructor(serviceTurno: TurnoService, private builder: FormBuilder, 
    public serviceEspecialidad: EspecialidadesService, serviceConsultorio: ConsultoriosService,
     serviceTratamiento: TratamientoService,
      public ngxSmartModalService: NgxSmartModalService, public disponibilidadService : DiponibilidadService) {
    this.miTurnoServicio = serviceTurno;
    this.miEspecialista = serviceEspecialidad;
    this.miConsultorioServicio = serviceConsultorio;
    this.miTratamientoServicio = serviceTratamiento;
   }

  dias = new FormControl('', [
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
    return this.serviceEspecialidad.traertodos('especialidad/', '').then(data => {
      console.log('traertodos: ' , data)
      this. especialidades= data;
    });
  }

  crearTurno(idEspecialidad)
  {    
    this.SeCreoUnTurno.emit(this.nuevoTurno);
    this.nuevoTurno.dia = '2019-08-01';
    this.nuevoTurno.hora = '10:15';
    this.nuevoTurno.id_tratamiento=this.idTratamiento;
    this.nuevoTurno.id_especialista=this.idEspecialista;
    if(!this.recepcionista)
      this.nuevoTurno.cliente = localStorage.getItem('email');
    else{
      this.nuevoTurno.cliente = this.cliente;
      this.nuevoTurno.recepcionista = localStorage.getItem('email');
    }      
    this.nuevoTurno.id_consultorio=Math.floor(Math.random()*(+7-+1)) + +1;
    this.nuevoTurno.id_especialidad=idEspecialidad;
    
    this.miTurnoServicio.insertar('turnos/alta/', this.nuevoTurno);
    this.cambiarEstadoConsultorio();
    this.ngxSmartModalService.open('myModal');
  }

  buscarTurno(){
    const params = `${this.especialidad}/${this.dia}`
   this.disponibilidadService.getTurnos('/turnos/fecha/',params).then(data=>
    {
      console.log("data: " ,data)
    })

  }

  buscarDisponibilidad(){
    this.okTurnos='ok';
    this.disponibilidadService.getHorarios('disponibilidad/'+this.idEspecialista, '').then(data=>{
      this.listado=data;
      this.asignarDias();
    })
  }

  asignarDias(){
    for(let i=0; i<this.listado.length; i++){
      switch (this.listado[i].dia_semana) {
        case 0:
          this.listado[i].dia_semana='lunes';
          break;
          case 1:
            this.listado[i].dia_semana='martes';
          break;
          case 2:
            this.listado[i].dia_semana='miercoles';
          break;
          case 3:
            this.listado[i].dia_semana='jueves';
          break;
          case 4:
            this.listado[i].dia_semana='viernes';
          break;
          case 5:
            this.listado[i].dia_semana='sabado';
          break;
        default:
          break;
      }
    }
  }

  hacerNuevoTurno()
  {
    this.nuevoTurno=new Turno("","", 0, "", "", 0, "", 0, 0);

  }

  seleccionarTurno(turnos){

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
