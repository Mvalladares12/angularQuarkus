import {Component, OnInit} from '@angular/core';
import {DepartamentoService} from '../services/departamento.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDepartamentoService} from '../services/service-departamento.service';
import {Departamento} from '../models/departamento.model';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  constructor(public departamentoService: DepartamentoService,
              private router: Router,
              private route: ActivatedRoute,
              private myService: ServiceDepartamentoService) { }

  cId:number=0;
  cNombre: string='';
  cCodigo: string="";
  index: number = 0;
  action:number;

  ngOnInit(): void {
    //this.action = parseInt(this.route.snapshot.queryParams['action']);
    this.tablas=this.departamentoService.tablas;
    this.index=parseInt(this.route.snapshot.params['id']);
    let tabla:Departamento=this.departamentoService.findDepartamentos(this.index);
    //console.log('indice  '+this.index);
    //this.cId = tabla.id;
    this.cNombre = tabla.nombre;
    this.cCodigo = tabla.codigo;

  }

  tablas:Departamento[] = [];


  backHome() {
    this.router.navigate(['']);
  }
  update(){
    if(this.action==1){
      this.router.navigate(['']);
      let myTabla=new Departamento(
        this.cId,
        this.cCodigo,
        this.cNombre
      );
      this.departamentoService.updateDepartamentos(this.index,myTabla);
    }else {
      this.router.navigate(['']);
      this.departamentoService.deleteDepartamentos(this.index);
    }
  }



}
