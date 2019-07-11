import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivosUsuarioService {

  //api = 'http://localhost/veterinaria/apirest.php/';
  api = 'http://localhost:8080/veterinaria/apirest.php/';
  //apiJWT = 'http://localhost:8080/veterinaria/jwt/';
  peticion: any;
  constructor( public miHttp: MiHttpService ) {
  }


  public traerUsuarios(ruta) {
    return this.miHttp.httpGetO(this.api + ruta)
    .toPromise()
    .then( data => {
      console.log('Archivo productos');
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
  }

  public insertarUsuario(ruta, objeto) {
    return this.miHttp.httpPostP2(this.api + ruta, JSON.stringify(objeto));

  }

  public borrarUsuario(ruta, id) {
    console.log('id:' + id);
    return this.miHttp.httpDelete(this.api + ruta, id);

  }

  public buscarUsuario(ruta, desc){
    return this.miHttp.httpGetP(this.api + ruta, desc)
    .toPromise()
    .then( data => {
      console.log('Archivo productos');
      //console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
  }
}
