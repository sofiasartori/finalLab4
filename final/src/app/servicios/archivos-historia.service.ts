import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivosHistoriaService {

  api = 'http://localhost:8080/clinica/apirest.php/';
  constructor(public miHttp: MiHttpService) { }

  public insertar(ruta, objeto) {
    return this.miHttp.httpPostP(this.api + ruta, JSON.stringify(objeto));

  }
}
