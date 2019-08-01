import { Component, OnInit } from '@angular/core';
import { TratamientoService } from 'src/app/servicios/tratamiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-tratamiento',
  templateUrl: './alta-tratamiento.component.html',
  styleUrls: ['./alta-tratamiento.component.css']
})
export class AltaTratamientoComponent implements OnInit {

  descripcion: string;
  miTratamientoServicio: TratamientoService;
  constructor(private tratamientoService: TratamientoService, private router: Router) {
    this.miTratamientoServicio=tratamientoService;
   }

  ngOnInit() {
  }

  crearTratamiento(){
    let tratamiento={descripcion:this.descripcion};
    this.miTratamientoServicio.insertar('tratamiento/alta/', tratamiento);
    this.router.navigate(['/menu']);
  }

}
