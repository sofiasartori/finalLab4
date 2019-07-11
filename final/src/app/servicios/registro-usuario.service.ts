import { Injectable } from '@angular/core';
import { ArchivosUsuarioService } from './archivos-usuario.service';


@Injectable({
  providedIn: 'root'
})
export class registroUsuarioService {

  constructor(public miHttp: ArchivosUsuarioService) {

  }

  filtrado: any;

  traertodos(ruta: string, filtro: string) {
    return this.miHttp.traerUsuarios('usuarios/').then(data => {
      console.log('usuarios service', data);
      return data;
    });
 }
 insertar(ruta: string, usuario: any){
  return this.miHttp.insertarUsuario('usuarios/alta/', usuario);
 }

 borrar(ruta: string, id: number){
  return this.miHttp.borrarUsuario('usuarios/', id);
 }

 login(ruta: string, desc: any){
   return this.miHttp.insertarUsuario('login/', desc);
 }
}
