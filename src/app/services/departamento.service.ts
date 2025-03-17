import {Injectable} from '@angular/core';
import {Departamento} from "../models/departamento.model";
import {ServiceDepartamentoService} from "./service-departamento.service";
import {DataService} from "./data.service";
import {DepartamentoDTO} from '../models/departamentoDTO.model';

@Injectable()
export class DepartamentoService {
  constructor(private serviceMsg: ServiceDepartamentoService,
              private dataService: DataService
  ) {}


  setDepartamentos(myDepartamento:Departamento[]){
    this.departamentos=myDepartamento;
  }



  loadDepartamentos(){
    return this.dataService.getDepartamentos();
  }



  departamentos: Departamento[]=[];
  //departamentoDTO: DepartamentoDTO[]=[];
  departamento:DepartamentoDTO;



  addDepartamentos(departamento:DepartamentoDTO){
    this.dataService.saveDepartamentos(departamento);
  }



  findDepartamentos(index: number){
    let depa:Departamento=this.departamentos[index];

    //esto es una prueba
    //let depa:Departamento|undefined=this.departamentos.find(x=>x.id===index);
    console.log(depa);
    return depa;
  }


  findDepa(id:number){
    return this.dataService.getDepa(id);
  }



  updateDepartamentos(index:number, departamento:DepartamentoDTO){
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
