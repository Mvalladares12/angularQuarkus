import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DistritoService} from '../services-distrito/distrito.service';
import {Distrito} from '../models-distrito/distrito.model';
import {DepartamentoDTO} from '../../Departamento/models-departamento/departamentoDTO.model';
import {DistritoDTO} from '../models-distrito/distritoDTO.model';

@Component({
  selector: 'app-update-distrito',
  standalone: false,
  templateUrl: './update-distrito.component.html',
  styleUrl: './update-distrito.component.css'
})
export class UpdateDistritoComponent implements OnInit {

  constructor(
    public distritoService: DistritoService,
    private router: Router,
    private route: ActivatedRoute,) { }

  cId:number=0;
  cNombre: string='';
  cCodigo: string='';
  index: number = 0;

  ngOnInit(): void {

    this.distritoService.loadDistritos().subscribe(myDepa => {
      this.distritos=Object.values(myDepa);
      this.distritoService.setDistritos(this.distritos);
      console.log(this.distritos);

    this.distritos=this.distritoService.distritos;
    this.index=parseInt(this.route.snapshot.params['id']);
    console.log(this.distritos);
    console.log(this.index);
    let distrito:Distrito=this.distritoService.findDistri(this.index)!;
    this.cId= distrito.id;
    this.cNombre = distrito.nombre;
    this.cCodigo = distrito.codigo;
    })
  }

  distritos:Distrito[] = [];

  backHome() {
    this.router.navigate(['distrito']);
  }

  update(){
    if(this.cId!=null){
      this.router.navigate(['distrito']);
      const myTabla=new DistritoDTO(
        this.cId,
        this.cNombre,
        this.cCodigo
      );
      this.distritoService.updateDistritos(this.index, this.cId,myTabla)
    }else {
      this.router.navigate(['distrito']);
    }
  }
}
