import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MascotaService } from '../../servicios/mascota.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Mascota } from '../../clases/mascota';

@Component({
  selector: 'app-alta-mascota',
  templateUrl: './alta-mascota.component.html',
  styleUrls: ['./alta-mascota.component.css']
})
export class AltaMascotaComponent implements OnInit {

  @Output() SeCreoUnaMascota: EventEmitter<any>= new EventEmitter<any>();
  nuevaMascota: Mascota;
  miMascotaServicio: MascotaService;
  admin: string;
  animal: FormControl;
  raza: FormControl;
  nombre: FormControl;
  edad: FormControl;
  duenio: FormControl;
  foto: FormControl;
  altaMascotaForm: FormGroup;
  nombreFoto: string = 'C:/usuarios/sofias/Descargas/';

  constructor(serviceMascota: MascotaService, private builder: FormBuilder) {
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

    this.altaMascotaForm = this.builder.group(group);
   }

  


  ngOnInit() {
  }

  crearMascota()
  {    
    this.SeCreoUnaMascota.emit(this.nuevaMascota);
    if(this.nuevaMascota.duenio==""){
      this.nuevaMascota.duenio=localStorage.getItem("email");
    }
    this.nombreFoto  + this.foto.value.slice(13);
    this.miMascotaServicio.insertar('mascotas/alta', this.nuevaMascota);
    this.nuevaMascota=null;
  }
  hacerNuevaMascota()
  {
    this.nuevaMascota=new Mascota(0,"","", "", 0,"", "");

  }

}
