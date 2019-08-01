import { Injectable } from '@angular/core';
import { ArchivosDiponibilidadService } from './archivos-diponibilidad.service';
import { Disponibilidad } from '../clases/disponibilidad';

@Injectable({
  providedIn: 'root'
})
export class DiponibilidadService {

  constructor(private miHttp: ArchivosDiponibilidadService) {}

  insertar(ruta: string, Disponibilidad: any){
    return this.miHttp.insertar(ruta, Disponibilidad);
   }
}
