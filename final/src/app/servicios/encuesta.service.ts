import { Injectable } from '@angular/core';
import { ArchivosEncuestaService } from './archivos-encuesta.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(public miHttp: ArchivosEncuestaService) { }

  insertar(ruta: string, encuesta: any){
    return this.miHttp.insertarEncuesta(ruta, encuesta);
   }
}
