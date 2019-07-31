import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivosHistoriaService {

  api = 'http://localhost:8080/clinica/apirest.php/';
  constructor(public miHttp: MiHttpService) { }

  public traerHistorias(ruta, filtro) {
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
    return this.miHttp.httpPostP(this.api + ruta, JSON.stringify(objeto));

  }
}
