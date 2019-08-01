import { Injectable } from '@angular/core';
import { ArchivosEspecialidadService } from './archivos-especialidad.service';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private miHttp: ArchivosEspecialidadService) { }

  traer(ruta: string, filtro: string) {
    return this.miHttp.traer(ruta, filtro).then(data => {
      return data;
    });
  }
  insertar(ruta: string, turno: any){
    return this.miHttp.insertar('especialidad/alta/', turno);
   }
}
