import {Component, OnInit} from '@angular/core';
import {MunicipioService} from '../services-municipio/municipio.service';
import {Depa, Municipio} from '../models-municipio/municipio.model';
import {MunicipioDTO} from '../models-municipio/municipioDTO.model';
import {DataDepartamentoService} from '../../Departamento/services-departamento/data-departamento.service';
import {DataMunicipioService} from '../services-municipio/data-municipio.service';

@Component({
  selector: 'app-home-municipio',
  standalone: false,
  templateUrl: './home-municipio.component.html',
  styleUrl: './home-municipio.component.css'
})
export class HomeMunicipioComponent implements OnInit {

  //id:number;

  constructor(private municipioService:MunicipioService,private dataMunicipioService:DataMunicipioService,private dataDepartamentoService: DataDepartamentoService) { }

  ngOnInit(): void {
    this.municipioService.loadMunicipios().subscribe(myMunicipio => {
      this.municipios=Object.values(myMunicipio);
      this.municipioService.setMunicipios(this.municipios);


      //para probar rellenar el campo
      this.dataDepartamentoService.getDepa().subscribe((myDepartamento) => {
        this.depa=myDepartamento;
      })
    })
  }

  public p: number;

  index:number;

  municipios:Municipio[]=[];
  depa:Depa[]=[];
  datoSeleccionado:Municipio;

  deleteMunicipios(i:number){
    this.municipioService.deleteMunicipios(i);
  }


  selectDepartamento(muni:Municipio){
    this.datoSeleccionado = muni;
  }


  registMunicipio(){
    let muni=new Municipio(
      this.cId,
      this.cIdDepartam,
      this.cCodigo,
      this.cNombre,
    )

    let myMuni=new MunicipioDTO(
      this.cIdDepartam,
      this.cCodigo,
      this.cNombre,
    )

    this.municipioService.addMunicipios(myMuni, muni);
    this.cIdDepartam=0;
    this.cCodigo='';
    this.cNombre='';
  }

  cId:number=0;
  cIdDepartam:number;
  cCodigo:string="";
  cNombre:string='';
}
