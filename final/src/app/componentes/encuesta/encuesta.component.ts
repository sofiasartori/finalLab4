import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Encuesta } from 'src/app/clases/encuesta';
import { EncuestaService } from 'src/app/servicios/encuesta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TurnoService } from 'src/app/servicios/turno.service';
import { Turno } from 'src/app/clases/turno';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  idTurno: string;
  nuevaEncuesta: Encuesta;
  miEncuestaServicio: EncuestaService;
  miTurnoServicio: TurnoService;
  turno: Turno = new Turno("", "", 0, " ", "", 0, "", 0);
  sub: any;

  constructor(serviceEncuesta: EncuestaService, private builder: FormBuilder, private route: ActivatedRoute, private router: Router, turnoService: TurnoService) { 
    this.miEncuestaServicio=serviceEncuesta;
    this.miTurnoServicio=turnoService;
  }
  
  clinica = new FormControl('', [
    Validators.required
  ]);
  
  especialista = new FormControl('', [
    Validators.required
  ]);


  comentarios = new FormControl('', [
    Validators.required
  ]);
  
  encuestaForm: FormGroup = this.builder.group({
    clinica: this.clinica,
    especialista: this.especialista,
    comentarios:this. comentarios
  });

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idTurno = params['idTurno'];
      });
    this.hacerNuevaEncuesta();
  }

  completar(){
    this.nuevaEncuesta.cliente=localStorage.getItem('email');
    this.nuevaEncuesta.id_turno = parseInt(this.idTurno);
    this.nuevaEncuesta.especialista = this.especialista.value;
    this.nuevaEncuesta.clinica=this.clinica.value;
    this.miEncuestaServicio.insertar('encuesta/alta/', this.nuevaEncuesta);
    this.turno.id_turno=parseInt(this.idTurno);
    this.turno.estado='finalizado';
    this.miTurnoServicio.cambiarEstado('turnos/', this.turno);
    this.nuevaEncuesta=null;
    this.router.navigate(['/listaTurno']);
  }

  hacerNuevaEncuesta(){
    this.nuevaEncuesta = new Encuesta(0, "", 0, 0, "");
  }

}
