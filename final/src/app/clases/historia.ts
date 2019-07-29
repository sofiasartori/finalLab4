export class Historia {
    cliente: string;
    dentista: string;
    comentario: string;
    
    public constructor(cliente: string, dentista: string, comentario:string){
      this.cliente=cliente;
      this.dentista = dentista;
      this.comentario = comentario;
    }
  }