import {Injectable} from '@angular/core';
import {Departamento} from "../models-departamento/departamento.model";
import {DataDepartamentoService} from "./data-departamento.service";
import {DepartamentoDTO} from '../models-departamento/departamentoDTO.model';

@Injectable()
export class DepartamentoService {
  constructor(
              private dataService: DataDepartamentoService
  ) {}


  setDepartamentos(myDepartamento:Departamento[]){
    this.departamentos=myDepartamento;
  }



  loadDepartamentos(){
    return this.dataService.getDepartamentos();
  }


  departamento:DepartamentoDTO;
  departamentos: Departamento[]=[];
  //departamentoDTO: DepartamentoDTO[]=[];




  addDepartamentos(departamento:DepartamentoDTO, depa:Departamento){
    // this.departamentos.push(departamento)
    console.log(this.departamentos);
    this.departamentos.push(depa);
    this.dataService.saveDepartamentos(departamento);
  }



  findDepartamentos(index: number){
    console.log(this.departamentos);
    return this.departamentos[index];
  }




  updateDepartamentos(index:number, departamento:DepartamentoDTO){
    let modifiedDepa=this.departamentos[index];
    modifiedDepa.nombre=departamento.nombre;

    this.dataService.updateDepartamentos(index,modifiedDepa);
  }



  deleteDepartamentos(index:number){
    this.dataService.deleteDepartamentos(index);
    this.departamentos.splice(index,1);
    //this.dataService.saveDepartamentos(this.departamento);
  }
}
