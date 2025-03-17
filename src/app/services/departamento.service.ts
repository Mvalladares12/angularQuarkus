import {Injectable} from '@angular/core';
import {Departamento} from "../models/departamento.model";
import {ServiceDepartamentoService} from "./service-departamento.service";
import {DataService} from "./data.service";


@Injectable()
export class DepartamentoService {
  constructor(private serviceMsg: ServiceDepartamentoService,
              private dataService: DataService) {}




  setDepartamentos(myTabla:Departamento[]){
    this.tablas=myTabla;
    //console.log(myTabla);
  }

  loadDepartamentos(){
    return this.dataService.getDepartamentos();
  }

  tablas: Departamento[]=[];

  addDepartamentos(departamento:Departamento){
    console.log(departamento);

    this.serviceMsg.showMsg(
      `Agregar nombre ${departamento.nombre} con codigo ${departamento.codigo}`,
    );
    this.tablas.push(departamento);
    this.dataService.saveDepartamentos(this.tablas);
  }


  findDepartamentos(index: number){
    console.log(this.tablas);
    console.log(this.tablas[index]);
    return this.tablas[index];
  }


  updateDepartamentos(index:number, departamento:Departamento){
    let modifiedDepa=this.tablas[index];
    modifiedDepa.nombre=departamento.nombre;

    this.dataService.updateDepartamentos(index,modifiedDepa);
  }

  deleteDepartamentos(index:number){
    this.tablas.splice(index,1);

    this.dataService.deleteDepartamentos(index);

    if(this.tablas!=null) this.dataService.saveDepartamentos(this.tablas);
  }
}
