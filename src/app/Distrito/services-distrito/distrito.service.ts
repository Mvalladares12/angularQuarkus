import {Injectable} from '@angular/core';
import {DataDistritoService} from './data-distrito.service';
import {Distrito, Muni} from '../models-distrito/distrito.model';
import {DistritoDTO} from '../models-distrito/distritoDTO.model';


@Injectable()
export class DistritoService{
  constructor(private dataDistritoService: DataDistritoService){}

  setDistritos(myDepartamento:Distrito[]){
    this.distritos=myDepartamento;
  }



  loadDistritos(){
    return this.dataDistritoService.getDistritos();
  }


  distritos: Distrito[]=[];


  setMuni(muni:Muni[]){
    this.muni=muni;
  }


  loadMuni(){
    return this.dataDistritoService.getMuni();
  }


  muni:Muni[]=[];


  addDistritos(distrito:DistritoDTO, distri:Distrito){
    // this.departamentos.push(departamento)
    console.log(this.distritos);
    this.distritos.push(distri);
    this.dataDistritoService.saveDistritos(distrito);
  }



  findDistri(index: number){
    console.log(this.distritos.find(x => x.id == index));
    return this.distritos.find(x => x.id == index);
  }




  updateDistritos(index:number,id:number, distrito:DistritoDTO){
    let modifiedDistrito=this.distritos.find(x => x.id == index);
    modifiedDistrito!.nombre=distrito.nombre;
    modifiedDistrito!.codigo=distrito.codigo;
    this.dataDistritoService.updateDistritos(id,modifiedDistrito!);
  }



  deleteDistritos(index:number){
    this.distritos.splice(index,1);
    this.dataDistritoService.deleteDistritos(index);
    //this.dataService.saveMunicipios(this.municipio);
  }
}
