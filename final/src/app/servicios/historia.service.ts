import { Injectable } from '@angular/core';
import { ArchivosHistoriaService } from './archivos-historia.service';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  constructor(private miHttp: ArchivosHistoriaService) { }

  insertar(ruta: string, historia: any){
    return this.miHttp.insertar('historia/alta/', historia);
   }
}
