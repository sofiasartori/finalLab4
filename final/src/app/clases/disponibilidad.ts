export class Disponibilidad {
    especialista: string;
    id_especialista: number;
    dia_semana: number;
    horario_llegada: string;
    horario_salida: string;
    
    public constructor(especialista: string, id_especialista: number, dia_semana: number, horario_llegada: string, horario_salida: string){
      this.especialista=especialista;
      this.id_especialista=id_especialista;
      this.dia_semana=dia_semana;
      this.horario_llegada=horario_llegada;
      this.horario_salida=horario_salida;
    }
  }