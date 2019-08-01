export class Encuesta {
    id_turno: number;
    cliente: string;
    especialista: number;
    clinica: number;
    opinion: string;
    
    public constructor(id_turno: number, cliente: string, especialista: number, clinica: number, opinion:string){
      this.id_turno=id_turno;
      this.cliente=cliente;
      this.especialista = especialista;
      this.clinica = clinica;
      this.opinion = opinion;
    }
  }