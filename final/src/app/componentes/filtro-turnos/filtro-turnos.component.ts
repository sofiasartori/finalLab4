import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-turnos',
  templateUrl: './filtro-turnos.component.html',
  styleUrls: ['./filtro-turnos.component.css']
})
export class FiltroTurnosComponent implements OnInit {
  filtro:string;
  constructor() { }

  ngOnInit() {
  }

  seleccionarFecha(event){
    this.filtro = event
  }

}
