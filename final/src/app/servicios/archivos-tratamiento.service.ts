import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivosTratamientoService {

  constructor(private miHttp: MiHttpService) { }
  api='http://localhost:8080/clinica/apirest.php/';
  
  public traer(ruta, filtro) {
    return this.miHttp.httpGetP(this.api + ruta, filtro)
    .toPromise()
    .then( data => {
      console.log('Archivo turno');
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
  }

  public insertar(ruta, objeto) {
    console.log('objeto:' + JSON.stringify(objeto));
    return this.miHttp.httpPostP(this.api + ruta, JSON.stringify(objeto));

  }
}
