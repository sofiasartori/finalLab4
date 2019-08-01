import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { registroUsuarioService } from '../../servicios/registro-usuario.service';
import { Router, Data } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import * as jwt_decode from "jwt-decode";

export interface data{
  respuesta: string
}
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
<<<<<<< HEAD
  robot: boolean=true;
  siteKeyCaptcha: string='6LdJx64UAAAAAEP2WGkCFpZQQFHn0oYKf-TZyIJK';

=======
  codigo1: number;
  codigo2: number;
  error: string;
  respuestaCaptcha: number;
  loading: any;
>>>>>>> df3bbb299270aa7a6c3901954e76ca84bb683ed0

  constructor(serviceUsuario: registroUsuarioService, private builder: FormBuilder, private router: Router, authoService: AuthService) {
    this.miUsuarioServicio = serviceUsuario;
    this.usuario.email='';
    this.codigo1 = Math.floor((Math.random() * 20) + 1);
    this.codigo2 = Math.floor((Math.random() * 20) + 1);    
   }

  email = new FormControl('', [
    Validators.required
  ]);


  password = new FormControl('', [
    Validators.required
  ]);

  captcha= new FormControl('',[
    Validators.required
  ]);

  loginForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password,
    captcha: this.captcha
  });

  ngOnInit() {
  }

  login(){
    let respuesta: string;
    let token: any;
    let tipo: string;
    let foto: string;
    this.loading=true;
  	if((this.codigo1 + this.codigo2) == this.respuestaCaptcha) {
                setTimeout(()=>{
                  this.loading=false;
                  this.respuestaCaptcha = null;
                  this.miUsuarioServicio.login('/login/', this.usuario).toPromise().then(response =>{
                    respuesta = JSON.stringify(response);
                    console.log("respuesta "+ respuesta);
                    localStorage.setItem(this.emailLocal, this.usuario.email);
                    localStorage.setItem(this.tokenLocal, respuesta);
                    token = jwt_decode(respuesta);
                    tipo = token.data.Tipo;
                    foto=token.data.Foto;
                    localStorage.setItem(this.tipoLocal, tipo);
                    localStorage.setItem('ID', token.data.ID);
                    localStorage.setItem('foto', foto);
                    this.router.navigate(['/menu']);                  
                  },
                  msg=>{
                    this.router.navigate(['/errorLogin']);
                  })
              }, 3000)}else {
                setTimeout(()=>{
                  this.error = "Captcha invalido!";
                  this.loading=false;
                },1000)                
  	            }    
  }

  volverInicio(){
    this.router.navigate(['/inicio']);
  }

    
}
