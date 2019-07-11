import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { MensajeChat } from '../modelos/mensaje-chat.model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  constructor(private firestore: AngularFirestore){

  }
  obtenerMensajes(){
    return this.firestore.collection('mensajes').snapshotChanges();
  }
  
}
