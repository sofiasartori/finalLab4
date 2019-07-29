import { Component, OnInit, Input } from '@angular/core';
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
    else{
      this.especialista='ok';
    }
    this.TraerTodos();
  }
  TraerTodos() {
    this.miTurnoServicio.traertodos('turnos/', this.filtro).then(data => {
      this.listado = data
      console.log(data)
    })
  }

  
}
