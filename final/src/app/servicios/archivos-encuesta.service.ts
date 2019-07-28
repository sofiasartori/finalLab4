import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchivosEncuestaService {

  api = 'http://localhost:8080/clinica/apirest.php/';
  constructor(public miHttp: MiHttpService, private http:HttpClient ) { }


  public insertarEncuesta(ruta, objeto) {
    return this.miHttp.httpPostP2(this.api + ruta, JSON.stringify(objeto));

  }
}
