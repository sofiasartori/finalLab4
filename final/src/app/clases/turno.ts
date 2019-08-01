export class Turno {
    id_turno: number;
    dia: string;
    hora: string;
    id_especialista: number;
    cliente: string;
    recepcionista: string;
    id_consultorio: number;
    estado: string;
    id_tratamiento: number;
    id_especialidad: number; 
    
    public constructor(dia: string, hora:string, id_especialista: number, cliente: string, recepcionista:string, id_consultorio:number, estado:string, id_tratamiento:number, id_especialidad: number){
      this.dia = dia;
      this.hora = hora;
      this.id_especialista = id_especialista;
      this.cliente= cliente;
      this.recepcionista = recepcionista;
      this.id_consultorio = id_consultorio;
      this.estado=estado;
      this.id_tratamiento=id_tratamiento;
      this.id_especialidad=id_especialidad;
    }
  }