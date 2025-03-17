import {Injectable} from '@angular/core';
import {Departamento} from "../models/departamento.model";
import {ServiceDepartamentoService} from "./service-departamento.service";
import {DataService} from "./data.service";
import {DepartamentoDTO} from '../models/departamentoDTO.model';

@Injectable()
export class DepartamentoService {
  constructor(private serviceMsg: ServiceDepartamentoService,
              private dataService: DataService) {}




  setDepartamentos(myTabla:Departamento[]){
    this.departamentos=myTabla;
  }



  loadDepartamentos(){
    return this.dataService.getDepartamentos();
  }



  departamentos: Departamento[]=[];
  departamentoDTO: DepartamentoDTO[]=[];
  departamento:DepartamentoDTO;



  addDepartamentos(departamento:DepartamentoDTO){
    let primerDep=departamento;
    this.serviceMsg.showMsg(
      `Agregar nombre ${primerDep.nombre} con codigo ${primerDep.codigo}`,
    );
    this.dataService.saveDepartamentos(primerDep);
  }



  findDepartamentos(index: number){
    console.log(this.departamentos);
    console.log(this.departamentos[index]);
    return this.departamentos[index];
  }



  updateDepartamentos(index:number, departamento:Departamento){
    let modifiedDepa=this.departamentos[index];
    modifiedDepa.nombre=departamento.nombre;

    this.dataService.updateDepartamentos(index,modifiedDepa);
  }



  deleteDepartamentos(index:number){
    this.departamentos.splice(index,1);
    this.dataService.deleteDepartamentos(index);
    if(this.departamentos!=null) this.dataService.saveDepartamentos(this.departamento);
  }
}
