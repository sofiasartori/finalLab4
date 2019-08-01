import { Injectable } from '@angular/core';
import { ArchivosEspecialistasService } from './archivos-especialistas.service';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(public miHttp: ArchivosEspecialistasService) {

  }

  filtrado: any;

  traertodos(ruta: string, filtro: string) {
    return this.miHttp.traerUsuarios(ruta).then(data => {
      console.log('usuarios service', data);
      return data;
    });
 }
} 