import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchivosEncuestaService {

  api = 'https://finallab4.000webhostapp.com/clinica/apirest.php/';
  constructor(public miHttp: MiHttpService, private http:HttpClient ) { }


  public insertarEncuesta(ruta, objeto) {
    return this.miHttp.httpPostP(this.api + ruta, JSON.stringify(objeto));

  }
}
