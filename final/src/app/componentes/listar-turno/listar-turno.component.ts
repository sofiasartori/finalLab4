import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../../servicios/turno.service';

@Component({
  selector: 'app-listar-turno',
  templateUrl: './listar-turno.component.html',
  styleUrls: ['./listar-turno.component.css']
})
export class ListarTurnoComponent implements OnInit {

  listado: any;
  miTurnoServicio: TurnoService;
  

  constructor(serviceTurno: TurnoService) {
    this.miTurnoServicio = serviceTurno;


  }
  ngOnInit() {
    this.TraerTodos();
  }
  TraerTodos() {
    this.miTurnoServicio.traertodos('turnos/', '').then(data => {
      this.listado = data
      console.log(data)
    })
  }
}
