import {Injectable} from '@angular/core';
import {DataDistritoService} from './data-distrito.service';
import {Distrito} from '../models-distrito/distrito.model';
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


  //distrito:DistritoDTO;
  distritos: Distrito[]=[];
  //departamentoDTO: DepartamentoDTO[]=[];




  addDistritos(distrito:DistritoDTO, distri:Distrito){
    // this.departamentos.push(departamento)
    console.log(this.distritos);
    this.distritos.push(distri);
    this.dataDistritoService.saveDistritos(distrito);
  }



  findDistritos(index: number){
    console.log(this.distritos);
    return this.distritos[index];
  }




  updateDistritos(index:number, distrito:DistritoDTO){
    let modifiedDistrito=this.distritos[index];
    modifiedDistrito.nombre=distrito.nombre;

    this.dataDistritoService.updateDistritos(index,modifiedDistrito);
  }



  deleteDistritos(index:number){
    this.distritos.splice(index,1);
    this.dataDistritoService.deleteDistritos(index);
    //this.dataService.saveMunicipios(this.municipio);
  }
}
