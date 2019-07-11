import { Injectable } from '@angular/core';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  public name: string;
  private _token: string;
  jwtHelper: JwtHelperService = new JwtHelperService();
    
  
  constructor( private router: Router ) {
    this._token = localStorage.getItem('token');
  }

  public isLogued()
  {
    try {
      // console.log( 'is logued', tokenNotExpired());
      //let rta = this.jwtHelper.isTokenExpired(this._token) || false;
      this._token=localStorage.getItem('token');
      let rta = !this.jwtHelper.isTokenExpired(this._token);
      return rta;
    } catch (error) {
      this.router.navigate(['']);
      return false;
    }
  }

  public getToken ()
  {
      try{
        console.log('getToekn', this.jwtHelper.decodeToken(this._token));
        return this.jwtHelper.decodeToken(this._token);
      }
      catch (error) {
      console.log("error pepe");
        return undefined;
      }
  }

  public getExpirationDate()
  {
    
    try {
      console.log('getExpirationDate', this.jwtHelper.getTokenExpirationDate(this._token))
      return this.jwtHelper.getTokenExpirationDate(this._token);
    } catch (error) {
      return null;
    }
  }

  public logOut()
  {
    try {
      localStorage.setItem('token', null);
      this.router.navigate(['/login']);
    } catch (error) {
      return false;
    }
  }

  public getNivel ()
  {
    // console.log(this.jwtHelper.decodeToken(this._token));
    if (this.jwtHelper.decodeToken(this._token).nivel || this.jwtHelper.decodeToken(this._token).nivel === 0)
      return this.jwtHelper.decodeToken(this._token).nivel;
    else
      return 1000;
    
  }
}
