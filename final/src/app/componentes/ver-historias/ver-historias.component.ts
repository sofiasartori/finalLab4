import { Component, OnInit } from '@angular/core';
import { HistoriaService } from 'src/app/servicios/historia.service';

@Component({
  selector: 'app-ver-historias',
  templateUrl: './ver-historias.component.html',
  styleUrls: ['./ver-historias.component.css']
})
export class VerHistoriasComponent implements OnInit {

  miHistoriaServicio: HistoriaService;
  listado: any;
  constructor(serviceHistori: HistoriaService) {
    this.miHistoriaServicio=serviceHistori;
   }

  ngOnInit() {
    this.traerTodas();
  }

  traerTodas(){
    this.miHistoriaServicio.traertodos('historia/', localStorage.getItem('email')).then(data => {
      this.listado = data
      console.log(data)
    });
  }

}
