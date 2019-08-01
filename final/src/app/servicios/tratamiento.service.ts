import { Injectable } from '@angular/core';
import { ArchivosTratamientoService } from './archivos-tratamiento.service';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private miHttp: ArchivosTratamientoService) { }

  traer(ruta: string, filtro: string) {
    return this.miHttp.traer(ruta, filtro).then(data => {
      return data;
    });
  }

  insertar(ruta: string, turno: any){
    return this.miHttp.insertar('tratamiento/alta/', turno);
   }
}
