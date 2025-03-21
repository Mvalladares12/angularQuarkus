import {Component, OnInit} from '@angular/core';
import {MunicipioService} from '../services-municipio/municipio.service';
import {Depa, Municipio} from '../models-municipio/municipio.model';
import {MunicipioDTO} from '../models-municipio/municipioDTO.model';
import {DataDepartamentoService} from '../../Departamento/services-departamento/data-departamento.service';
import {DataMunicipioService} from '../services-municipio/data-municipio.service';
import {PrintService} from '../../print.service';

@Component({
  selector: 'app-home-municipio',
  standalone: false,
  templateUrl: './home-municipio.component.html',
  styleUrl: './home-municipio.component.css'
})
export class HomeMunicipioComponent implements OnInit {


  constructor(private municipioService:MunicipioService, private print:PrintService) { }


  ngOnInit(): void {
    this.municipioService.loadMunicipios().subscribe(myMunicipio => {
      this.municipios=Object.values(myMunicipio);
      this.municipioService.setMunicipios(this.municipios);
      console.log(this.municipios);
    })

    this.municipioService.loadDepa().subscribe((myDepartamento) => {
      this.depa=Object.values(myDepartamento);
      this.municipioService.setDepa(this.depa);
      //const nombreDepa=this.municipios.find(x=>x.id===Municipio.i)
    })
  }

  public p: number;

  index:number;

  municipios:Municipio[]=[];
  depa:Depa[]=[];
  depa2:string;
  i: number;

  deleteMunicipios(id:number, index:number){
    this.municipioService.deleteMunicipios(id);
    this.municipios.splice(index,1);
  }


  mostrarDepa(municipio:Municipio){
    for (this.i=0; this.i< this.municipios.length; this.i++) {
      const depa = this.depa.find(x => x.id == municipio.idDepartamento);
      return this.depa2=depa!.nombre;
    }
    return false;
  }



  registMunicipio(){

    const arreglo=this.depa.find(x=>x.nombre===this.cDepa);

    if(arreglo){
      this.cIdDepartam=arreglo.id
      console.log(this.cIdDepartam)
      //this.cIdDepartam=this.idencontrado;
    }else {
      console.log('no se encontró'+this.cIdDepartam)
    }


    let muni=new Municipio(
      this.cId,
      this.cIdDepartam,
      this.cCodigo.toUpperCase(),
      this.cNombre,
    )


    let myMuni=new MunicipioDTO(
      this.cIdDepartam,
      this.cCodigo.toUpperCase(),
      this.cNombre,
    )

    this.municipioService.addMunicipios(myMuni, muni);
    this.cIdDepartam=0;
    this.cCodigo='';
    this.cNombre='';
  }

  clean(){
    this.cCodigo='';
    this.cNombre='';
  }

  cId:number=0;
  cIdDepartam:number;
  cCodigo:string="";
  cNombre:string='';
  cDepa:string='';


  generarReporte() {
    const encabezado=["id","Nombre","Departamento", "Codigo"];
    this.municipioService.loadMunicipios().subscribe(data=>{
      const body=Object(data).map(
        (obj:any)=>{
          const datos=[
            obj.id,
            obj.nombre,
            obj.depa2,
            obj.codigo,
          ]
          return datos;
        }
      );
      this.print.imprimir(encabezado, body, "departamento", true);
    })
  }
}
