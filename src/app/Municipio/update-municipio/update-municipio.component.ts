import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MunicipioService} from '../services-municipio/municipio.service';
import {Municipio} from '../models-municipio/municipio.model';
import {DepartamentoDTO} from '../../Departamento/models-departamento/departamentoDTO.model';
import {MunicipioDTO} from '../models-municipio/municipioDTO.model';

@Component({
  selector: 'app-update-municipio',
  standalone: false,
  templateUrl: './update-municipio.component.html',
  styleUrl: './update-municipio.component.css'
})
export class UpdateMunicipioComponent implements OnInit {

  constructor(
    public municipioService: MunicipioService,
    private router: Router,
    private route: ActivatedRoute,) { }

  cId:number=0;
  cNombre: string='';
  cCodigo: string='';
  index: number = 0;

  ngOnInit(): void {

    this.municipioService.loadMunicipios().subscribe(muni => {
      this.municipios=Object.values(muni);
      this.municipioService.setMunicipios(this.municipios);
      console.log(this.municipios);

      this.municipios=this.municipioService.municipios;
      this.index=parseInt(this.route.snapshot.params['id']);
      console.log(this.municipios);
      console.log(this.index);
      let municipio:Municipio=this.municipioService.findMuni(this.index)!;
      this.cId= municipio.id;
      this.cNombre = municipio.nombre;
      this.cCodigo = municipio.codigo;
    })
  }

  municipios:Municipio[]=[]

  backHome() {
    this.router.navigate(['municipio']);
  }

  update(){
    if(this.cId!=null){
      this.router.navigate(['municipio']);
      const myTabla=new MunicipioDTO(
        this.cId,
        this.cCodigo,
        this.cNombre

      );
      this.municipioService.updateMunicipios(this.index, this.cId,myTabla)
    }else {
      this.router.navigate(['municipio']);
    }
  }
}
