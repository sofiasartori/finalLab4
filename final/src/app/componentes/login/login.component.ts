import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { registroUsuarioService } from '../../servicios/registro-usuario.service';
import { Router, Data } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario ('', '', '', '');
  miUsuarioServicio: registroUsuarioService;
  emailLocal: string = 'email';
  tokenLocal: string = 'token';
  tipoLocal: string = 'tipo';


  constructor(serviceUsuario: registroUsuarioService, private builder: FormBuilder, private router: Router, authoService: AuthService) {
    this.miUsuarioServicio = serviceUsuario;
    this.usuario.email='';
   }

  email = new FormControl('', [
    Validators.required
  ]);


  password = new FormControl('', [
    Validators.required
  ]);

  loginForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password
  });

  ngOnInit() {
  }

  login(){
    let respuesta: string;
    let token: any;
    let tipo: string;
    this.usuario.ult_conexion_dia= new Date().getDate.toString();
    this.usuario.ult_conexion_hora= new Date().getTime.toString();

    this.miUsuarioServicio.login('/login/', this.usuario).toPromise().then(response =>{
      respuesta = JSON.stringify(response);
      console.log("respuesta "+ respuesta);
      localStorage.setItem(this.emailLocal, this.usuario.email);
      localStorage.setItem(this.tokenLocal, respuesta);
      token = jwt_decode(respuesta);
      tipo = token.data.Tipo;
      localStorage.setItem(this.tipoLocal, tipo);
      this.router.navigate(['/menu']);
      
      },
      msg=>{
        this.router.navigate(['/errorLogin']);
      })
  }
}
