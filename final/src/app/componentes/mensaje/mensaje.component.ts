import { Component, OnInit, Input } from '@angular/core';
import { MensajeChat } from 'src/app/modelos/mensaje-chat.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChatService } from 'src/app/servicios/chat.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  lista: MensajeChat[];
  constructor(private firestore: AngularFirestore, private servicio: ChatService){

  }

  ngOnInit(){
    this.servicio.obtenerMensajes().subscribe(actionArray=>{
      this.lista = actionArray.map(item=>{
        return item.payload.doc.data() 
      })
    })
  }

  ngOnChanges(){
    this.servicio.obtenerMensajes().subscribe(actionArray=>{
      this.lista = actionArray.map(item=>{
        return{
          mensaje: item.payload.doc.data()
        } as MensajeChat;
      })
    })
  }


}
