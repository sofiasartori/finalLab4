import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TurnoService } from '../../servicios/turno.service';

@Component({
  selector: 'app-listar-turno',
  templateUrl: './listar-turno.component.html',
  styleUrls: ['./listar-turno.component.css']
})
export class ListarTurnoComponent implements OnInit {

  @Input() filtro:string;
  listado: any;
  miTurnoServicio: TurnoService;
  recepcionista='';
  especialista='';
  

  constructor(serviceTurno: TurnoService) {
    this.miTurnoServicio = serviceTurno;
  }
  ngOnInit() {
    if(localStorage.getItem("tipo")==="recepcionista"){
      this.recepcionista='ok';
    }
    else if(localStorage.getItem("tipo")==="especialista"){
      this.especialista='ok';
    }
    if(!this.especialista){
      this.TraerTodos();  
    }
    else if(!this.especialista && !this.recepcionista){
      this.TraerPorPaciente();
    }
    else{
      this.TraerPorFecha();
    }
    
    
  }

  ngOnChanges(changes: SimpleChanges){
    this.TraerPorFecha();
  }

  TraerTodos() {
    this.miTurnoServicio.traertodos('turnos/', '').then(data => {
      this.listado = data
      console.log(data)
    })
  }

  TraerPorFecha() {
    this.miTurnoServicio.traertodos('turnos/', this.filtro).then(data => {
      this.listado = data
      console.log(data)
    })
  }

  TraerPorPaciente() {
    this.miTurnoServicio.traertodos('turnos/cliente/', localStorage.getItem('email')).then(data => {
      this.listado = data
      console.log(data)
    })
  }
  
}
