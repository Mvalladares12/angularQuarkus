import {Injectable} from '@angular/core';
import {DataMunicipioService} from './data-municipio.service';
import {MunicipioDTO} from '../models-municipio/municipioDTO.model';
import {Depa, Municipio} from '../models-municipio/municipio.model';

@Injectable()
export class MunicipioService {
  constructor(private dataService: DataMunicipioService) {}

  setMunicipios(myDepartamento:Municipio[]){
    this.municipios=myDepartamento;
  }



  loadMunicipios(){
    return this.dataService.getMunicipios();
  }


  municipios: Municipio[]=[];


  setDepa(depa:Depa[]){
    this.depa = depa;
  }

  loadDepa(){
    return this.dataService.getDepa();
  }

  depa: Depa[]=[];



  addMunicipios(municipio:MunicipioDTO, muni:Municipio){
    // this.departamentos.push(departamento)
    console.log(this.municipios);
    this.municipios.push(muni);
    this.dataService.saveMunicipios(municipio);
  }



  findMunicipios(index: number){
    console.log(this.municipios);
    return this.municipios[index];
  }




  updateMunicipios(index:number, municipio:MunicipioDTO){
    let modifiedMuni=this.municipios[index];
    modifiedMuni.nombre=municipio.nombre;

    this.dataService.updateMunicipios(index,modifiedMuni);
  }



  deleteMunicipios(index:number){
    this.municipios.splice(index,1);
    this.dataService.deleteMunicipios(index);
    //this.dataService.saveMunicipios(this.municipio);
  }
}
