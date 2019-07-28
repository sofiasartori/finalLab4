import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchivosEspecialistasService {

  api = 'http://localhost:8080/clinica/apirest.php/';
  //apiJWT = 'http://localhost:8080/veterinaria/jwt/';
  peticion: any;
  
  constructor(public miHttp: MiHttpService, private http:HttpClient) { }

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
}
