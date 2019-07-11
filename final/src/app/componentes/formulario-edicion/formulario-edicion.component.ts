import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { Mascota } from 'src/app/clases/mascota';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-formulario-edicion',
  templateUrl: './formulario-edicion.component.html',
  styleUrls: ['./formulario-edicion.component.css']
})
export class FormularioEdicionComponent implements OnInit {

  @Input() mascotaId : number; 
  @Output() SeModificoUnaMascota: EventEmitter<any>= new EventEmitter<any>();
  miMascotaServicio: MascotaService;
  edicionMascota: Mascota;
  admin: string;
  animal: FormControl;
  raza: FormControl;
  nombre: FormControl;
  edad: FormControl;
  duenio: FormControl;
  foto: FormControl;
  editarMascotaForm: FormGroup;
  
  constructor(serviceMascota: MascotaService, private builder: FormBuilder, private router: Router, private sanitizer: DomSanitizer) {
    this.miMascotaServicio = serviceMascota;
    if(localStorage.getItem("tipo")==="administrador"){
      this.admin="ok";
    }

    this.animal = new FormControl('', [
      Validators.required
    ]);
    
    this.raza = new FormControl('', [
      Validators.required
    ]);
  
    this.nombre = new FormControl('', [
      Validators.required
    ]);
  
    this.edad = new FormControl('', [
      Validators.required
    ]);
  
    this.duenio = new FormControl('', [
      Validators.required
    ]);
  
    this.foto = new FormControl('', [
      Validators.required
    ]);
    const group = (this.admin === 'ok')? {
      animal: this.animal,
      raza: this.raza,
      nombre: this.nombre,
      edad: this.edad,
      duenio: this.duenio,
      foto: this.foto
    } : 
    {
      animal: this.animal,
      raza: this.raza,
      nombre: this.nombre,
      edad: this.edad,
      foto: this.foto
    }

    this.editarMascotaForm = this.builder.group(group);
  }

  public ngOnInit() {
  }

  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(' data:image/jpeg;charset=utf-8;base64,' + url);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.mascotaId);
    this.completarForm();
  }

  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];

  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

_handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.edicionMascota.foto =  btoa(binaryString)
          console.log(btoa(binaryString));
  }

  editarMascota()
  {        
    console.log(this.foto.value);
    console.log(this.edicionMascota);
    this.miMascotaServicio.modificar('mascotas/alta', this.edicionMascota);
    this.edicionMascota=null;
    this.SeModificoUnaMascota.emit();
    this.router.navigate(['/listaMascota']);    
  }

  public completarForm(){
    this.miMascotaServicio.traerUno('mascotas/', this.mascotaId).then(data=>{
      this.edicionMascota = new Mascota(data[0].id, data[0].animal, data[0].raza, data[0].nombre, data[0].edad, data[0].duenio, data[0].foto);
    });
  }

}
