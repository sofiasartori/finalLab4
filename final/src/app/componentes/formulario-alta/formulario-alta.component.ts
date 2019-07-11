import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { registroUsuarioService } from '../../servicios/registro-usuario.service';

@Component({
  selector: 'app-formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent implements OnInit {

  @Output() SeCreoUnUsuario: EventEmitter<any>= new EventEmitter<any>();
  nuevoUsuario: Usuario;
  miUsuarioServicio: registroUsuarioService;
  
  constructor(serviceUsuario: registroUsuarioService, private builder: FormBuilder) {
    this.miUsuarioServicio = serviceUsuario;
   }

  email = new FormControl('', [
    Validators.required
  ]);
  
  tipo = new FormControl('', [
    Validators.required
  ]);


  password = new FormControl('', [
    Validators.required
  ]);

  foto = new FormControl('', [
    Validators.required
  ]);
  
  altaForm: FormGroup = this.builder.group({
    email: this.email,
    tipo: this.tipo,
    password: this.password,
    foto: this.foto
  });


  ngOnInit() {
  }

  crearUsuario()
  {    
    this.SeCreoUnUsuario.emit(this.nuevoUsuario);
    
    this.miUsuarioServicio.insertar('usuario/alta', this.nuevoUsuario);
    this.nuevoUsuario=null;
  }
  hacerNuevoUsuario()
  {
    this.nuevoUsuario=new Usuario("","", "", "");

  }
}
