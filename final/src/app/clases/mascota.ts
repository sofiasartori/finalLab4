export class Mascota {
    public id: number;
    animal: string;
    raza: string;
    nombre: string;
    edad: number;
    duenio: string;
    foto: string;
    
    public constructor(id: number, animal: string, raza: string, nombre: string, edad: number, duenio:string, foto:string){
      this.id=id;
      this.animal = animal;
      this.raza = raza;
      this.nombre = nombre;
      this.edad= edad;
      this.duenio= duenio;
      this.foto = foto;
    }
  }