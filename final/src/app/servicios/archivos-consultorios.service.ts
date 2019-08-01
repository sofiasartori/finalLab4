import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivosConsultoriosService {

  api = 'https://finallab4.000webhostapp.com/clinica/https://finallab4.000webhostapp.com/';
  peticion: any;
  constructor( public miHttp: MiHttpService ) {
  }


  public traerConsultorios(ruta) {
    return this.miHttp.httpGetO(this.api + ruta)
    .toPromise()
    .then( data => {
      console.log('Archivo turno');
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
  }

  public editarEstado(ruta, id, estado, atencion){
    let url = this.api+ruta+ + id + "/" + estado + "/" + atencion;
    return this.miHttp.httpPut(url, 'pp');
  }
}
