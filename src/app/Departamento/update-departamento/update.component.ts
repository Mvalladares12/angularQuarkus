import {Component, Input, OnInit} from '@angular/core';
import {DepartamentoService} from '../services-departamento/departamento.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Departamento} from '../models-departamento/departamento.model';
import {DepartamentoDTO} from '../models-departamento/departamentoDTO.model';

@Component({
  selector: 'app-update-departamento',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  constructor(
              public departamentoService: DepartamentoService,
              private router: Router,
              private route: ActivatedRoute,) { }

  cId:number=0;
  cNombre: string='';
  cCodigo: string='';
  index: number = 0;
  action: number = 0;

  departamentos:Departamento[] = [];

  ngOnInit(): void {
    /*this.departamentoService.loadDepartamentos().subscribe(myTabla => {
      this.departamentos=Object.values(myTabla);
      this.departamentoService.setDepartamentos(this.departamentos);
    })*/
    this.action = parseInt(this.route.snapshot.queryParams['action']);
    this.departamentos=this.departamentoService.departamentos;
    this.index=parseInt(this.route.snapshot.params['id']);
    console.log(this.departamentos);
    console.log(this.index);
    if(this.index<this.departamentos.length){
      let departamento:Departamento=this.departamentoService.findDepartamentos(this.index);
      this.cNombre = departamento.nombre;
      this.cCodigo = departamento.codigo;
    }else {
      console.log("fuera de rango")
    }
  }



  departamentoDTO:DepartamentoDTO[]=[];


  backHome() {
    this.router.navigate(['']);
  }


  /*update-departamento(){
    if(this.action==1){
      this.router.navigate(['']);
      let myTabla=new DepartamentoDTO(
        this.cCodigo,
        this.cNombre
      );
      this.departamentoService.updateDepartamentos(this.index,myTabla);
    }else {
      this.router.navigate(['']);
      //this.departamentoService.deleteDepartamentos(this.index);
    }
  }*/

}
