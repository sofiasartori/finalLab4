import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Encuesta } from 'src/app/clases/encuesta';
import { EncuestaService } from 'src/app/servicios/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  nuevaEncuesta: Encuesta;
  miEncuestaServicio: EncuestaService;

  constructor(serviceEncuesta: EncuestaService, private builder: FormBuilder) { 
    this.miEncuestaServicio=serviceEncuesta;
  }
  
  clinica = new FormControl('', [
    Validators.required
  ]);
  
  especialista = new FormControl('', [
    Validators.required
  ]);


  comentarios = new FormControl('', [
    Validators.required
  ]);
  
  encuestaForm: FormGroup = this.builder.group({
    clinica: this.clinica,
    especialista: this.especialista,
    comentarios:this. comentarios
  });

  ngOnInit() {
  }

  completar(){
    this.miEncuestaServicio.insertar('usuario/alta', this.nuevaEncuesta);
    this.nuevaEncuesta=null;
  }

}
