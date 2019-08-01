import { Injectable } from '@angular/core';
import { ArchivosDiponibilidadService } from './archivos-diponibilidad.service';
import { Disponibilidad } from '../clases/disponibilidad';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class DiponibilidadService {

  constructor(private miHttp: ArchivosDiponibilidadService, private miHttpS: MiHttpService) {}

  insertar(ruta: string, Disponibilidad: any){
    return this.miHttp.insertar(ruta, Disponibilidad);
   }

   getTurnos(ruta: string, params: any){
    return this.miHttp.getTurnos(ruta+ params);
   }

   getHorarios(ruta: string, params: any){
    return this.miHttp.getTurnos(ruta+ params);
   }
}
