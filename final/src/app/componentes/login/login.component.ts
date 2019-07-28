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
  robot: boolean=true;
  siteKeyCaptcha: string='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';


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

  public resolved(captchaResponse: string) {
    this.miUsuarioServicio.enviarCaptcha(captchaResponse).subscribe((data: data) =>{
      console.log(data);
      if(data.respuesta == "No eres un robot")
        this.robot = false;
    });
}

  login(){
    let respuesta: string;
    let token: any;
    let tipo: string;
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

  volverInicio(){
    this.router.navigate(['/inicio']);
  }
}
