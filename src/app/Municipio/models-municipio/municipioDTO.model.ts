export class MunicipioDTO{

  constructor(idDepartamento:number, codigo:string, nombre:string) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.idDepartamento = idDepartamento;
  }

  idDepartamento:number=0;
  codigo:string='';
  nombre:string='';
}
