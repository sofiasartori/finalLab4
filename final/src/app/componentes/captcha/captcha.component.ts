import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  codigo1: number;
  codigo2: number;
  error: string;
  respuesta: number;
 
  constructor() { 
  	this.codigo1 = Math.floor((Math.random() * 20) + 1);
  	this.codigo2 = Math.floor((Math.random() * 20) + 1);
  }
 
  checkAnswer() {
  	this.error = null;
  	if((this.codigo1 + this.codigo2) == this.respuesta) {
                this.respuesta = null;
  		return true;
  	} else {
  		this.error = "Argh!";
  	}  	
  }

  ngOnInit(){

  }

}
