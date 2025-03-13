import {Injectable} from '@angular/core';
import {Tabla} from "./tabla.model";
import {ServiceTablaService} from "./service-tabla.service";
import {DataService} from "./data.service";


@Injectable()
export class TablaService {
  constructor(private serviceMsg: ServiceTablaService, private dataService: DataService) {}

  tablas: Tabla[]=[];


  setTabla(tabla:Tabla[]){
    this.tablas=tabla;
  }

  loadTabla(){
    return this.dataService.getTablas();
  }

  addTabla(tabla:Tabla){
    console.log(this.tablas);
    this.serviceMsg.showMsg(
      `Agregar nombre ${tabla.nombre} con codigo ${tabla.codigo}`,
    );
    this.tablas.push(tabla);
    this.dataService.saveTabla(this.tablas);
  }





  findTabla(index:number){
    let tabla:Tabla=this.tablas[index];

    return tabla;
  }

  updateTabla(index:number, tabla:Tabla){
    let modifiedTabla=this.tablas[index];
    modifiedTabla.nombre=tabla.nombre;

    this.dataService.updateTabla(index,modifiedTabla);
  }

  deleteTabla(index:number){
    this.tablas.splice(index,1);

    this.dataService.deleteTabla(index);

    if(this.tablas!=null) this.dataService.saveTabla(this.tablas);
  }
}
