import { Injectable } from '@angular/core';
import { ArchivosMascotaService } from './archivos-mascota.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(public miHttp: ArchivosMascotaService) {

  }

  filtrado: any;

  traertodos(ruta: string, filtro: string) {
    return this.miHttp.traerMascotas('mascotas/').then(data => {
      console.log('mascotas service', data);
      return data;
    });
 }
 insertar(ruta: string, mascota: any){
  return this.miHttp.insertarMascota('mascotas/alta/', mascota);
 }

 modificar(ruta: string, objeto: any){
   return this.miHttp.modificarMascota('mascotas/', objeto);
 }

 traerUno(ruta:string, id: number){
  return this.miHttp.traerMascota('mascotas/', id).then(data=>{
    console.log('mascota service', data);
    return data;
  });
 }
}
