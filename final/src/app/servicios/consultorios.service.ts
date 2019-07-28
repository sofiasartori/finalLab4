import { Injectable } from '@angular/core';
import { ArchivosConsultoriosService } from './archivos-consultorios.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultoriosService {

  constructor(private miHttp: ArchivosConsultoriosService) { }

  traertodos(ruta: string, filtro: string) {
    return this.miHttp.traerConsultorios('consultorios/').then(data => {
      console.log('turnos service', data);
      return data;
    });
 }

 cambiarEstado(id:number, estado:string, atencion:string){
   return this.miHttp.editarEstado('consultorios/', id, estado, atencion);
 }
}
