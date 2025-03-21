import {Component, OnInit} from '@angular/core';
import {DistritoService} from '../services-distrito/distrito.service';
import {Distrito, Muni} from '../models-distrito/distrito.model';
import {DistritoDTO} from '../models-distrito/distritoDTO.model';
import {PrintService} from '../../print.service';
import {Municipio} from '../../Municipio/models-municipio/municipio.model';

@Component({
  selector: 'app-home-distrito',
  standalone: false,
  templateUrl: './home-distrito.component.html',
  styleUrl: './home-distrito.component.css'
})
export class HomeDistritoComponent implements OnInit {

  constructor(private distritoService: DistritoService, private print: PrintService) {
  }

  ngOnInit(): void {
    this.distritoService.loadDistritos().subscribe(distri => {
      this.distritos=Object.values(distri);
      this.distritoService.setDistritos(this.distritos);
    })

    this.distritoService.loadMuni().subscribe(myMuni => {
      this.muni= Object.values(myMuni);
      this.distritoService.setMuni(this.muni);
    })
  }

  public p: number;

  index:number;

  distritos:Distrito[]=[];
  muni:Muni[]=[];
  muni2:string;
  i:number;

  deleteDistrito(id:number, index:number){
    this.distritos.splice(index,1);
    this.distritoService.deleteDistritos(id);
  }


  mostrarDepa(distrito:Distrito){
    for (this.i=0; this.i< this.distritos.length; this.i++) {
      const depa = this.muni.find(x => x.id == distrito.idMunicipio);
      return this.muni2=depa!.nombre;
    }
    return false;
  }


  registroDistrito(){

    const arreglo=this.muni.find(x=>x.nombre===this.cMuni);

    if(arreglo){
      this.cIdMunicipio=arreglo.id
      console.log(this.cIdMunicipio)
    }else {
      console.log('no se encontró'+this.cIdMunicipio)
    }


    let distri=new Distrito(
      this.cId,
      this.cNombre,
      this.cCodigo.toUpperCase(),
      this.cIdMunicipio,
    )

    let myDist=new DistritoDTO(
      this.cIdMunicipio,
      this.cNombre,
      this.cCodigo.toUpperCase(),
    )

    this.distritoService.addDistritos(myDist,distri);
    this.cIdMunicipio=0;
    this.cCodigo='';
    this.cNombre='';
  }

  clean(){
    this.cCodigo='';
    this.cNombre='';
  }

  cId:number=0;
  cIdMunicipio:number;
  cCodigo:string="";
  cNombre:string='';
  cMuni:string='';

  generarReporte() {
    const encabezado=["id","Nombre", "Codigo"];
    this.distritoService.loadDistritos().subscribe(data=>{
      const body=Object(data).map(
        (obj:any)=>{
          const datos=[
            obj.id,
            obj.nombre,
            obj.codigo,
          ]
          return datos;
        }
      );
      this.print.imprimir(encabezado, body, "departamento", true);
    })
  }
}
