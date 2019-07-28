import { Component, OnInit, Input } from '@angular/core';
import { HistoriaService } from 'src/app/servicios/historia.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-historia',
  templateUrl: './formulario-historia.component.html',
  styleUrls: ['./formulario-historia.component.css']
})
export class FormularioHistoriaComponent implements OnInit {

  @Input() cliente: string;
  comentario: string;
  miHistoriaServicio: HistoriaService;
  nuevaHistoria: any;

  constructor(serviceHistoria: HistoriaService, private builder: FormBuilder) {
    this.miHistoriaServicio = serviceHistoria;
   }

   observaciones = new FormControl('', [
    Validators.required
  ]);
  
  
  historiaForm: FormGroup = this.builder.group({
    observaciones: this.comentario
  });

  ngOnInit() {
  }

  completarHistoria(){
    this.nuevaHistoria={"cliente": this.cliente, "dentista":localStorage.getItem('email'), "comentario": this.observaciones};
    this.miHistoriaServicio.insertar('historia/', this.nuevaHistoria);
    this.nuevaHistoria=null;
  }

}
