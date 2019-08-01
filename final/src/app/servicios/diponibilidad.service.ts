import { Injectable } from '@angular/core';
import { ArchivosDiponibilidadService } from './archivos-diponibilidad.service';

@Injectable({
  providedIn: 'root'
})
export class DiponibilidadService {

  constructor(private miHttp: ArchivosDiponibilidadService) {}

  insertar(ruta: string, encuesta: any){
    return this.miHttp.insertarEncuesta(ruta, encuesta);
   }
}
