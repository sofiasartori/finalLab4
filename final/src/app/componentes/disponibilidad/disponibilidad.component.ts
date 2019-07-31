import { Component, OnInit } from '@angular/core';
import { Disponibilidad } from 'src/app/clases/disponibilidad';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.css']
})
export class DisponibilidadComponent implements OnInit {
  disponibilidad: Disponibilidad;
  constructor() { }

  ngOnInit() {
  }

}
