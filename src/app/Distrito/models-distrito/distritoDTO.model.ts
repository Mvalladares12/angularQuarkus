export class DistritoDTO{

  constructor(idMunicipio: number, nombre: string, codigo: string) {
    this.idMunicipio = idMunicipio;
    this.nombre = nombre;
    this.codigo = codigo;
  }

  idMunicipio:number=0;
  nombre:string='';
  codigo:string='';
}
