import { Component, OnInit, Input } from '@angular/core';
import { TurnoService } from 'src/app/servicios/turno.service';
import { Turno } from 'src/app/clases/turno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelar-turno',
  templateUrl: './cancelar-turno.component.html',
  styleUrls: ['./cancelar-turno.component.css']
})
export class CancelarTurnoComponent implements OnInit {

  @Input() idTurno: number;
  miTurnoServicio: TurnoService;
  turno: Turno = new Turno("", "", 0, "", "", 0, "", 0, 0);
  constructor(serviceTurno: TurnoService, private router:Router) {
    this.miTurnoServicio=serviceTurno;
   }

  ngOnInit() {
  }

  cancelar(){
    this.turno.id_turno=this.idTurno;
    this.turno.estado='cancelado';
    this.miTurnoServicio.cambiarEstado('turnos/', this.turno);
  }

}
