import { Injectable } from '@angular/core';
import { ArchivosHistoriaService } from './archivos-historia.service';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  constructor(private miHttp: ArchivosHistoriaService) { }

  traertodos(ruta: string, filtro: string) {
    return this.miHttp.traerHistorias(ruta, filtro).then(data => {
      console.log('turnos service', data);
      return data;
    });
 }

  insertar(ruta: string, historia: any){
    return this.miHttp.insertar('historia/alta/', historia);
   }
}
