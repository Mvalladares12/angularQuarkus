import {Component, Input, OnInit} from '@angular/core';
import {Departamento} from '../models-departamento/departamento.model';
import {DepartamentoService} from '../services-departamento/departamento.service';
import {Router} from '@angular/router';
import {DepartamentoDTO} from '../models-departamento/departamentoDTO.model';
import {PrintService} from '../../print.service';


@Component({
  selector: 'app-home-departamento',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  constructor(private departamentoService: DepartamentoService, private router:Router, private print:PrintService) {
  }

  ngOnInit(): void {
    this.departamentoService.loadDepartamentos().subscribe(myDepa => {
      this.departamentos=Object.values(myDepa);
      this.departamentoService.setDepartamentos(this.departamentos);
      //console.log(this.departamentos);
    })
  }


  public p: number;

  index:number;

  departamentos: Departamento[] = [];

  delete(id:number, index:number) {
    this.departamentoService.deleteDepartamentos(id);
    this.departamentos.splice(index,1);
  }

  registTabla(){
    let depa=new Departamento(
      this?.cId,
      this.cCodigo.toUpperCase(),
      this.cNombre
    )
    let myDepartamento=new DepartamentoDTO(
      //this?.cId,
      this.cCodigo.toUpperCase(),
      this.cNombre
    );
    this.departamentoService.addDepartamentos(myDepartamento, depa);
    this.cCodigo='';
    this.cNombre=''
  }

  clean(){
    this.cCodigo='';
    this.cNombre='';
  }

  cId:number=0;
  cCodigo:string="";
  cNombre:string='';


  generarReporte() {
    const encabezado=["id","Nombre", "Codigo"];
    this.departamentoService.loadDepartamentos().subscribe(data=>{
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
