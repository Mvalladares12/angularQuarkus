import {Component, OnInit} from '@angular/core';
import {DepartamentoService} from '../services/departamento.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDepartamentoService} from '../services/service-departamento.service';
import {Departamento} from '../models/departamento.model';
import {DepartamentoDTO} from '../models/departamentoDTO.model';

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
  cCodigo: string='';
  index: number = 0;
  action: number = 0;

  ngOnInit(): void {
    this.departamentoService.loadDepartamentos().subscribe(myTabla => {
      this.departamentos=Object.values(myTabla);
      this.departamentoService.setDepartamentos(this.departamentos);
    })
    this.departamentos=this.departamentoService.departamentos;
    this.index=parseInt(this.route.snapshot.params['id']);
    if(this.index<this.departamentos.length){
      //let departamento:Departamento|undefined=this.departamentoService.findDepartamentos(this.index);
      let departamento=this.departamentoService.findDepartamentos(this.index);
      console.log(departamento);
      this.cNombre = departamento!.nombre;
      this.cCodigo = departamento!.codigo;
    }else {
      console.log("Fuera del rango de la lista");
    }


  }


  departamentos:Departamento[] = [];
  departamentoDTO:DepartamentoDTO[]=[];


  backHome() {
    this.router.navigate(['']);
  }


  /*update(){
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
