import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-email-sesion',
  templateUrl: './email-sesion.component.html',
  styleUrls: ['./email-sesion.component.css']
})
export class EmailSesionComponent implements OnInit {

  email: string = '';
  autServicio: AuthService;
  constructor(private router: Router, autoServicio: AuthService) {
    this.autServicio=autoServicio;
   }

  ngOnInit() {
    this.email=localStorage.getItem('email');
  }  

  logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('tipo');
    this.autServicio.logOut();
    this.router.navigate(['/login']);
    //this.ngOnInit();
  }

  volverMenu(){
    this.router.navigate(['/menu']);
  }
}
