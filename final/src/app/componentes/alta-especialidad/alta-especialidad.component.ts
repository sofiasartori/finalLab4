import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/servicios/especialidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-especialidad',
  templateUrl: './alta-especialidad.component.html',
  styleUrls: ['./alta-especialidad.component.css']
})
export class AltaEspecialidadComponent implements OnInit {

  descripcion: string;
  miEspecialidadServicio: EspecialidadService;
  constructor(private especialidadService: EspecialidadService, private router: Router) {
    this.miEspecialidadServicio=especialidadService;
   }

  ngOnInit() {
  }

  crearEspecialidad(){
    let especialidad={descripcion:this.descripcion};
    this.miEspecialidadServicio.insertar('especialidad/alta/', especialidad);
    this.router.navigate(['/menu']);
  }

}
