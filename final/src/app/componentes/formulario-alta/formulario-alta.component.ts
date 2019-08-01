import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { registroUsuarioService } from '../../servicios/registro-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent implements OnInit {

  @Output() SeCreoUnUsuario: EventEmitter<any>= new EventEmitter<any>();
  nuevoUsuario: Usuario;
  miUsuarioServicio: registroUsuarioService;
  usuarioInsertado: any;
  
  constructor(serviceUsuario: registroUsuarioService, private builder: FormBuilder, private router: Router) {
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
    setTimeout(() => {
      if(this.nuevoUsuario.tipo==="especialista"){
        this.miUsuarioServicio.obtenerId('usuarios/id/', this.nuevoUsuario.email).then((data:any)=>{
          this.nuevoUsuario=null;
          if(data && data.length >0)
          this.router.navigate(['/disponibilidad', data[0].id_usuario]);
        });        
      }else{
        this.nuevoUsuario=null;
      }
    }, 3000);
    
    //this.nuevoUsuario=null;
    
  }
  hacerNuevoUsuario()
  {
    this.nuevoUsuario=new Usuario("","", "", "");
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
    this.nuevoUsuario.foto =  btoa(binaryString)
    console.log(btoa(binaryString));
  }

  volverInicio(){
    this.router.navigate(['/inicio']);
  }
}
