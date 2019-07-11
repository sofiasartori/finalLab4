import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TurnoService } from '../../servicios/turno.service';
import { Turno } from '../../clases/turno';

@Component({
  selector: 'app-pedir-turno',
  templateUrl: './pedir-turno.component.html',
  styleUrls: ['./pedir-turno.component.css']
})
export class PedirTurnoComponent implements OnInit {

  @Output() SeCreoUnTurno: EventEmitter<any>= new EventEmitter<any>();
  nuevoTurno: Turno;
  miTurnoServicio: TurnoService;
  
  constructor(serviceTurno: TurnoService, private builder: FormBuilder) {
    this.miTurnoServicio = serviceTurno;
   }

  dia = new FormControl('', [
    Validators.required
  ]);
  
  hora = new FormControl('', [
    Validators.required
  ]);

  
  altaTurnoForm: FormGroup = this.builder.group({
    dia: this.dia,
    hora: this.hora
  });


  ngOnInit() {
  }

  crearTurno()
  {    
    this.SeCreoUnTurno.emit(this.nuevoTurno);
    this.nuevoTurno.duenio=localStorage.getItem('email');
    
    this.miTurnoServicio.insertar('turnos/alta', this.nuevoTurno);
    this.nuevoTurno=null;
  }
  hacerNuevoTurno()
  {
    this.nuevoTurno=new Turno("","", "");

  }
}
