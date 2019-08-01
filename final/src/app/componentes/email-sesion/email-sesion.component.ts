import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-email-sesion',
  templateUrl: './email-sesion.component.html',
  styleUrls: ['./email-sesion.component.css']
})
export class EmailSesionComponent implements OnInit {

  email: string = '';
  autServicio: AuthService;
  constructor(private router: Router, autoServicio: AuthService, private sanitizer: DomSanitizer) {
    this.autServicio=autoServicio;
   }

  ngOnInit() {
    this.email=localStorage.getItem('email');
  }  

  logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('tipo');
    localStorage.removeItem('foto');
    this.autServicio.logOut();
    this.router.navigate(['/login']);
    //this.ngOnInit();
  }

  volverMenu(){
    this.router.navigate(['/menu']);
  }

  getSantizeUrl(){
    let foto: string;
    if(localStorage.getItem('foto')==null){
      //foto='../default.jpg';
      return 'assets/default.jpg'
    }
    else
      foto=localStorage.getItem('foto');
    return this.sanitizer.bypassSecurityTrustUrl(' data:image/jpeg;charset=utf-8;base64,' + foto);
  }
}
