export class Disponibilidad {
    id_especialista: number;
    id_especialidad: number;
    dia_semana: number;
    horario_llegada: string;
    horario_salida: string;
    
    public constructor(id_especialista: number, id_especialidad: number, dia_semana: number, horario_llegada: string, horario_salida: string){
      this.id_especialista=id_especialista;
      this.id_especialidad=id_especialidad;
      this.dia_semana=dia_semana;
      this.horario_llegada=horario_llegada;
      this.horario_salida=horario_salida;
    }
  }