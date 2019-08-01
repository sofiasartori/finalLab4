import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivosTurnoService {

  //api = 'http://localhost/veterinaria/apirest.php/';
  api = 'https://finallab4.000webhostapp.com/clinica/apirest.php/';
  peticion: any;
  constructor( public miHttp: MiHttpService ) {
  }


  public traerTurnos(ruta, filtro) {
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

  public insertarTurno(ruta, objeto) {
    console.log('objeto:' + JSON.stringify(objeto));
    return this.miHttp.httpPostP(this.api + ruta, JSON.stringify(objeto));

  }

  public cambiarEstado(ruta, objeto) {
    return this.miHttp.httpPut(this.api + ruta, objeto);

  }

  public traerCantidad(ruta, turno){
    return this.miHttp.httpGetP(this.api + ruta, '')
    .toPromise()
    .then( data => {
      console.log('Archivo turno');
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
  }
}
