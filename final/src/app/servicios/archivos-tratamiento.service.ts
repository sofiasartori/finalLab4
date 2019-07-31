import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivosTratamientoService {

  constructor(private miHttp: MiHttpService) { }
  api='http://localhost:8080/clinica/apirest.php/';
  
  public insertar(ruta, objeto) {
    console.log('objeto:' + JSON.stringify(objeto));
    return this.miHttp.httpPostP(this.api + ruta, JSON.stringify(objeto));

  }
}
