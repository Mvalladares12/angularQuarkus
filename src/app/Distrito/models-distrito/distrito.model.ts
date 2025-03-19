export class Distrito{

  constructor(id: number, nombre: string, codigo: string, idMunicipio: number) {
    this.id = id;
    this.nombre = nombre;
    this.codigo = codigo;
    this.idMunicipio = idMunicipio;
  }

  id:number;
  nombre:string;
  codigo:string;
  idMunicipio:number;
}


export class Muni{
  id:number;
  nombre:string;
}
