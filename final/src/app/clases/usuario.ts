export class Usuario {
    email: string;
    tipo: string;
    password: string;
    foto: string;
    ult_conexion_dia: string;
    ult_conexion_hora: string;
    
    public constructor(email: string, tipo: string, password: string, foto: string){
      this.email = email;
      this.tipo = tipo;
      this.password = password;
      this.foto=foto;
    }
  }