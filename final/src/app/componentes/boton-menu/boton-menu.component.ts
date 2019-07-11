import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-menu',
  templateUrl: './boton-menu.component.html',
  styleUrls: ['./boton-menu.component.css']
})
export class BotonMenuComponent implements OnInit {

  email: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
  }

  volverMenu(){
    this.router.navigate(['/menu']);
  }

}
