import { Injectable } from '@angular/core';
import { log } from 'util';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
//npm install rxjs-compat --save
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MiHttpService {
  

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor( public http: HttpClient ) { }

  public httpGetP ( url: string, id:number)
  {
    /*return this.http
    .get( url + descripcion)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );*/
    
    return this.http.get( url + id)
      .map( ( res: Response ) => res)
      .catch( ( err: any ) => throwError(err || 'Server error'));
  }

  public httpPostP( url: string, objeto: any )
  {
    let header = new Headers();
    header.set
    return this.http
    .post( url,objeto,this.options )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpPostP2( url: string, objeto: any )
  {
    console.log("objeto" + objeto)
    let header = new Headers();
    header.set
    return this.http
    .post( url,objeto,this.options )
    .map((res:Response)=>res)
    .catch( ( err: any ) => throwError(err || 'Server error'));
    /*.subscribe( data => {
      console.log( data );
      return data;
    });*/
  }

  public httpDelete( url: string, id: number )
  {
    let header = new Headers();
    header.set
    return this.http
    .delete( url + id, this.options )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpPut( url: string, objeto: any )
  {
    let header = new Headers();
    header.set
    return this.http
    .put( url, objeto, this.options )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpGetO ( url: string): Observable<any>
  {
    return this.http.get( url )
      .map( ( res: Response ) => res)
      .catch( ( err: any ) => throwError(err || 'Server error'));
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}