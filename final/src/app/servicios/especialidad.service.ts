import { Injectable } from '@angular/core';
import { ArchivosEspecialidadService } from './archivos-especialidad.service';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private miHttp: ArchivosEspecialidadService) { }

  insertar(ruta: string, turno: any){
    return this.miHttp.insertar('especialidad/alta/', turno);
   }
}
