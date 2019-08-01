import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TurnoService } from '../../servicios/turno.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-listar-turno',
  templateUrl: './listar-turno.component.html',
  styleUrls: ['./listar-turno.component.css']
})
export class ListarTurnoComponent implements OnInit {

  @Input() filtro: string;
  listado: any;
  miTurnoServicio: TurnoService;
  recepcionista = '';
  especialista = '';
  options = {
    fieldSeparator: ';',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    headers: ['dia', 'hora', 'cliente', 'recepcionista', 'id_especialista',
      'id_consultorio', 'estado', 'id_tratamiento'],
    showTitle: true,
    title: 'turnos',
    useBom: false,
    removeNewLines: true,
    keys: ['dia', 'hora', 'cliente', 'recepcionista', 'id_especialista',
      'id_consultorio', 'estado', 'id_tratamiento']
  };

  constructor(serviceTurno: TurnoService) {
    this.miTurnoServicio = serviceTurno;
  }
  ngOnInit() {
    if (localStorage.getItem("tipo") === "recepcionista") {
      this.recepcionista = 'ok';
    }
    else if (localStorage.getItem("tipo") === "especialista") {
      this.especialista = 'ok';
    }
    if (!this.especialista) {
      this.TraerTodos();
    }
    else if (!this.especialista && !this.recepcionista) {
      this.TraerPorPaciente();
    }
    else {
      this.TraerPorFecha();
    }
    document.querySelector('angular2csv > button').innerHTML = 'Descargar CSV';

  }

  ngOnChanges(changes: SimpleChanges) {
    this.TraerPorFecha();
  }

  TraerTodos() {
    this.miTurnoServicio.traertodos('turnos/', '').then(data => {
      this.listado = data
      console.log(data)
    })
  }

  TraerPorFecha() {
    this.miTurnoServicio.traertodos('turnos/', this.filtro).then(data => {
      this.listado = data
      console.log(data)
    })
  }

  TraerPorPaciente() {
    this.miTurnoServicio.traertodos('turnos/cliente/', localStorage.getItem('email')).then(data => {
      this.listado = data
      console.log(data)
    })
  }

  public captureScreen() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF 
    });
  }

}
