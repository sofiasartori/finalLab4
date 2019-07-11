import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user: string;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('token'));
    if(localStorage.getItem('token')==null)
      this.user='usuario';
  }
  abrirLogin(){
    this.router.navigate(['/login']);
  }

  abrirForm(){
    this.router.navigate(['/formulario-usuario']);
  }

  
}
