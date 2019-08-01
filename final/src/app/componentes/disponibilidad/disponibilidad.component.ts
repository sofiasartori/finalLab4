import { Component, OnInit } from '@angular/core';
import { Disponibilidad } from 'src/app/clases/disponibilidad';
import { EspecialidadService } from 'src/app/servicios/especialidad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DiponibilidadService } from 'src/app/servicios/diponibilidad.service';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.css']
})
export class DisponibilidadComponent implements OnInit {
  nuevaDisponibilidad: Disponibilidad;
  dias: Array<DisponibilidadMedico>= []
  miEspecialidadServicio: EspecialidadService;
  especialidad: any;
  error = '';
  id_usuario:number;
  sub: any;
  miDisponibilidadServicio: DiponibilidadService;
  constructor(serviceEspecialidad: EspecialidadService, private route: ActivatedRoute, serviceDisponibilidad: DiponibilidadService, private router: Router) {
    this.miEspecialidadServicio = serviceEspecialidad;
    this.miDisponibilidadServicio = serviceDisponibilidad;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id_usuario = params['id_usuario'];
      this.dias = [{id_especialista: this.id_usuario, horario_llegada: '08:00', horario_salida: '19:00' }];

      });
    this.traerEspecialidad();
  }
  agregarDia() {
    if (this.dias.length < 6) {
      this.dias.push({ id_especialista: this.id_usuario,  horario_llegada: '08:00', horario_salida: '19:00' });

    }
  }

  traerEspecialidad() {
    return this.miEspecialidadServicio.traer('especialidad/', '').then(data => {
      this.especialidad = data;
    });
  }

  guardarMisHorarios() {
    console.log(this.dias)
    this.error = this.verificar();
  }

  verificar() {
    if (this.checkDuplicateInObject('dia_semana', this.dias))
      return 'Los días no pueden estar duplicados';

    for (let i = 0; i < this.dias.length; i++) {
      const dia = this.dias[i];
      if (dia.horario_salida && dia.dia_semana && dia.id_especialidad && dia.horario_llegada) {
        if (dia.dia_semana == SABADO) {
          if (dia.horario_llegada < '08:00' || dia.horario_salida > '14:00')
            return 'El horario de atencion los días sábados es de 8 a 14hs';
        } else {
          if (dia.horario_llegada < '08:00' || dia.horario_salida > '19:00')
            return 'El horario de atencion de lunes a viernes es de 8 a 19hs';
        }
      } else {
        return 'Faltan llenar uno o mas campos'
      }
    }
    for (let i = 0; i < this.dias.length; i++) {
     this.miDisponibilidadServicio.insertar('disponibilidad/alta/', this.dias[i]);
    }
    this.nuevaDisponibilidad=null;
    this.router.navigate(['/menu']);
  }

  checkDuplicateInObject(propertyName, inputArray) {
    var seenDuplicate = false,
      testObject = {};

    inputArray.map(function (item) {
      var itemPropertyName = item[propertyName];
      if (itemPropertyName in testObject) {
        testObject[itemPropertyName].duplicate = true;
        item.duplicate = true;
        seenDuplicate = true;
      }
      else {
        testObject[itemPropertyName] = item;
        delete item.duplicate;
      }
    });

    return seenDuplicate;
  }

  hacerNuevaDisponibilidad(){
    this.nuevaDisponibilidad = new Disponibilidad(0, 0, 0, "", "");
  }

}

const SABADO = 5

type DisponibilidadMedico = {
  id_especialista?: number,
  id_especialidad?: number,
  dia_semana?: number,
  horario_llegada?: string,
  horario_salida?: string
}