import { Injectable } from '@angular/core';
import { ArchivosTurnoService } from './archivos-turno.service';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(public miHttp: ArchivosTurnoService) {

  }

  filtrado: any;

  traertodos(ruta: string, filtro: string) {
    return this.miHttp.traerTurnos('turnos/').then(data => {
      console.log('turnos service', data);
      return data;
    });
 }
 insertar(ruta: string, turno: any){
  return this.miHttp.insertarTurno('turnos/alta/', turno);
 }

}
