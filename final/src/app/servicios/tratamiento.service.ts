import { Injectable } from '@angular/core';
import { ArchivosTratamientoService } from './archivos-tratamiento.service';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private miHttp: ArchivosTratamientoService) { }

  insertar(ruta: string, turno: any){
    return this.miHttp.insertar('tratamiento/alta/', turno);
   }
}
