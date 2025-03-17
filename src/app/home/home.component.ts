import {Component, Input, OnInit} from '@angular/core';
import {Departamento} from '../models/departamento.model';
import {ServiceDepartamentoService} from '../services/service-departamento.service';
import {DepartamentoService} from '../services/departamento.service';
import {Router} from '@angular/router';
import {DepartamentoDTO} from '../models/departamentoDTO.model';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public p: number;

  index:any;



   delete(i:number) {
    console.log("indice numero: "+i);
    this.departamentoService.deleteDepartamentos(i);
  }

  public handleDismiss(): void {}

  constructor(private myService: ServiceDepartamentoService, private departamentoService: DepartamentoService, private router:Router) {
  }

  ngOnInit(): void {

    this.departamentoService.loadDepartamentos().subscribe(myTabla => {
      //console.log(myTabla);
      this.departamentos=Object.values(myTabla);
      this.departamentoService.setDepartamentos(this.departamentos);
    })
  }

  departamentos: Departamento[] = [];

  registTabla(){
    let myDepartamento=new DepartamentoDTO(
      //this?.cId,
      this.cCodigo,
      this.cNombre
    );
    this.departamentoService.addDepartamentos(myDepartamento);
  }

  cCodigo:string="";
  cNombre:string='';
}
