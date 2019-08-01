import { Component, OnInit } from '@angular/core';
import { registroUsuarioService } from 'src/app/servicios/registro-usuario.service';


@Component({
  selector: 'app-estadisticas-empleados',
  templateUrl: './estadisticas-empleados.component.html',
  styleUrls: ['./estadisticas-empleados.component.css']
})
export class EstadisticasEmpleadosComponent implements OnInit {

  miServicio: registroUsuarioService;
  listadoUsuarios: any;
  conexioness:string;
  turnoss:string;

  constructor(serviceUsuario: registroUsuarioService) {
    this.miServicio=serviceUsuario;
   }

  ngOnInit() {
    this.traerLogs();
  }

  traerLogs(){
    this.miServicio.traertodos('usuarios/', '').then(data=>{
      this.listadoUsuarios = data;
    })
  }

  conexiones(){
    this.conexioness='ok';
    this.turnoss='';
  }

  turnos(){
    this.conexioness='';
    this.turnoss='ok';
  }

}
