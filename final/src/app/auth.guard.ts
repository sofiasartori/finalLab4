import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  authServicio: AuthService;
  
  constructor(private router: Router, autoServicio: AuthService){
    this.authServicio=autoServicio;
  }

  canActivate(){    
    if (this.authServicio.isLogued()){
      return true;
    } else {
      return false;      
    }
  }
}
