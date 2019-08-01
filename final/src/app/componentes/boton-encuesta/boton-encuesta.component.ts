import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-encuesta',
  templateUrl: './boton-encuesta.component.html',
  styleUrls: ['./boton-encuesta.component.css']
})
export class BotonEncuestaComponent implements OnInit {

  @Input() idTurno: number;
  encuesta: number;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  abrirEncuesta(){
    this.encuesta = this.idTurno;
    this.router.navigate(['/encuesta', this.idTurno])
  }

}
