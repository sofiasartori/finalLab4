import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-chat',
  templateUrl: './formulario-chat.component.html',
  styleUrls: ['./formulario-chat.component.css']
})
export class FormularioChatComponent implements OnInit {

  mensaje: string
  
  constructor(private firestore: AngularFirestore) {
   }

  ngOnInit() {
  }

  resetearCampo(){
    this.mensaje= ' ';
  }

  enviar(){
    let data={
      mensaje: this.mensaje,
      email: localStorage.getItem("email")
    }
    this.firestore.collection('mensajes').add(data);
    this.resetearCampo();
  }

}
  