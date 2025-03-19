export class Municipio{

  constructor(id:number, idDepartamento:number, codigo:string, nombre:string) {
    this.id = id;
    this.codigo = codigo;
    this.nombre = nombre;
    this.idDepartamento = idDepartamento;
  }

  id:number=0;
  idDepartamento:number=0;
  codigo:string='';
  nombre:string='';
}

export class Depa{
  id:number;
  nombre:string;
}
