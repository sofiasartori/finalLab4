import { Component, OnInit } from '@angular/core';
import { TurnoService } from 'src/app/servicios/turno.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-estadisticas-turnos',
  templateUrl: './estadisticas-turnos.component.html',
  styleUrls: ['./estadisticas-turnos.component.css']
})
export class EstadisticasTurnosComponent implements OnInit {
  miTurnoServicio: TurnoService;
  cantidad: any = '';
  fecha_desde: string;
  fecha_hasta: string;
  fechass:string;
  quien:string;
  listado: any;
  recepcionista: string;
  turnoss: string;

  constructor(serviceTurno: TurnoService, private builder: FormBuilder) {
    this.miTurnoServicio=serviceTurno;
   }

  fechaDesde = new FormControl('', [
    Validators.required
  ]);
  
  fechaHasta = new FormControl('', [
    Validators.required
  ]);

  fechasForm: FormGroup = this.builder.group({
    fechaDesde: this.fechaDesde,
    fechaHasta: this.fechaHasta
  });

  ngOnInit() {
  }

  buscar(){
    this.miTurnoServicio.traerCantidadFechas('turnos/cantidad/fechas/' + this.fecha_desde + '/' + this.fecha_hasta).then(data=>{
      this.cantidad=data[0];
    });  
  }

  fechas(){
    this.turnoss='';
    this.fechass='ok';
  }

  turnosP(){
    this.quien='cliente';
    this.turnoss='ok';
    this.fechass='';
    this.traerTurnos(this.quien);    
  }

  turnosR(){
    this.fechass='';
    this.recepcionista='ok';
    this.quien='recepcionista';
    this.turnoss='ok';
    this.traerTurnos(this.quien);
  }

  traerTurnos(quien: string){
    this.miTurnoServicio.traertodos('turnos/quien/', quien).then(data=>{
      this.listado=data;
    })
  }

}
