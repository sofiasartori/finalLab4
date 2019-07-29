import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cliente='';
  administrador='';
  especialista='';
  recepcionista='';
  constructor(private router: Router) { }
  

  ngOnInit() {
    if(localStorage.getItem('tipo')=="cliente"){
      this.cliente='cliente';
    }
    else if(localStorage.getItem("tipo")==="especialista"){
      this.especialista='especialista';
    }
    else
      this.recepcionista="recepcionista";
  }

  listadoConsultorios(){
    this.router.navigate(['/listaConsultorios']);
  }

  listadoTurnos(){
    this.router.navigate(['/listaTurno']);
  }

  pedirTurno(){
    this.router.navigate(['/formularioTurno']);
  }

  chat(){
    this.router.navigate(['/chat']);
  }

  listaTurnos(){
    this.router.navigate(['/listaTurnos']);
  }

}
