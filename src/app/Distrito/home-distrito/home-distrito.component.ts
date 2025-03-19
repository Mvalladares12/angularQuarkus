import {Component, OnInit} from '@angular/core';
import {DistritoService} from '../services-distrito/distrito.service';
import {Distrito} from '../models-distrito/distrito.model';
import {DistritoDTO} from '../models-distrito/distritoDTO.model';

@Component({
  selector: 'app-home-distrito',
  standalone: false,
  templateUrl: './home-distrito.component.html',
  styleUrl: './home-distrito.component.css'
})
export class HomeDistritoComponent implements OnInit {

  constructor(private distritoService: DistritoService) {
  }

  ngOnInit(): void {
    this.distritoService.loadDistritos().subscribe(distri => {
      this.distritos=Object.values(distri);
      this.distritoService.setDistritos(this.distritos);
    })
  }

  public p: number;

  index:number;

  distritos:Distrito[]=[]

  deleteDistrito(id:number, index:number){
    this.distritos.splice(index,1);
    this.distritoService.deleteDistritos(id);
  }


  registroDistrito(){
    let distri=new Distrito(
      this.cId,
      this.cNombre,
      this.cCodigo,
      this.cIdMunicipio,
    )

    let myDist=new DistritoDTO(
      this.cIdMunicipio,
      this.cNombre,
      this.cCodigo,
    )

    this.distritoService.addDistritos(myDist,distri);
    this.cIdMunicipio=0;
    this.cCodigo='';
    this.cNombre='';
  }

  cId:number=0;
  cIdMunicipio:number;
  cCodigo:string="";
  cNombre:string='';
}
