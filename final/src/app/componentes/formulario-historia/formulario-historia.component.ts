import { Component, OnInit, Input } from '@angular/core';
import { HistoriaService } from 'src/app/servicios/historia.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Historia } from 'src/app/clases/historia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-historia',
  templateUrl: './formulario-historia.component.html',
  styleUrls: ['./formulario-historia.component.css']
})
export class FormularioHistoriaComponent implements OnInit {

  miHistoriaServicio: HistoriaService;
  nuevaHistoria: Historia;

  constructor(serviceHistoria: HistoriaService, private builder: FormBuilder, private router: Router) {
    this.miHistoriaServicio = serviceHistoria;
   }

   observaciones = new FormControl('', [
    Validators.required
  ]);
  
  
  historiaForm: FormGroup = this.builder.group({
    observaciones: this.observaciones
  });

  ngOnInit() {
    this.nuevaHistoria=new Historia("", "", "");
  }

  completarHistoria(){
    this.nuevaHistoria.cliente=localStorage.getItem('cliente');
    this.nuevaHistoria.dentista=localStorage.getItem('email');
    this.miHistoriaServicio.insertar('historia/', this.nuevaHistoria);
    localStorage.removeItem('cliente');
    this.nuevaHistoria=null;
    this.router.navigate(['/menu']);
  }

}
