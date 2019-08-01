import { Component, OnInit, Input } from '@angular/core';
import { TurnoService } from 'src/app/servicios/turno.service';
import { Router } from '@angular/router';
import { Turno } from 'src/app/clases/turno';

@Component({
  selector: 'app-atender-paciente',
  templateUrl: './atender-paciente.component.html',
  styleUrls: ['./atender-paciente.component.css']
})
export class AtenderPacienteComponent implements OnInit {
  @Input() idTurno: number; 
  @Input() paciente: string;
  turno: Turno = new Turno("", "", 0, "", "", 0, "", 0);
  miTurnoServicio: TurnoService;
  constructor(serviceTurno: TurnoService, private router:Router) {
    this.miTurnoServicio=serviceTurno;
   }
  

  ngOnInit() {
  }

  atenderPaciente(){
    this.cambiarEstado();
    localStorage.setItem('cliente', this.paciente);
    this.router.navigate(['/historiaClinica']);
  }

  cambiarEstado(){
    this.turno.id_turno=this.idTurno;
    this.turno.estado='atendido';
    return this.miTurnoServicio.cambiarEstado('turnos/', this.turno);
  }

}
