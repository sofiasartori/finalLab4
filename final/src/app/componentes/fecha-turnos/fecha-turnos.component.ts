import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fecha-turnos',
  templateUrl: './fecha-turnos.component.html',
  styleUrls: ['./fecha-turnos.component.css']
})
export class FechaTurnosComponent implements OnInit {
  @Output() onDateSelected: EventEmitter<any> = new EventEmitter<any>();
  filtro:string;
  constructor() { }  

  ngOnInit() {
  }

  seleccionarFecha(filtro) {
    this.onDateSelected.emit(filtro)
  }  

}
