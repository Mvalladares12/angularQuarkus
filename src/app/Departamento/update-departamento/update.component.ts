import {Component, OnInit} from '@angular/core';
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

  ngOnInit(): void {
    this.departamentoService.loadDepartamentos().subscribe(myDepa => {
      this.departamentos=Object.values(myDepa);
      this.departamentoService.setDepartamentos(this.departamentos);
      console.log(this.departamentos);

    this.departamentos=this.departamentoService.departamentos;
    this.index=parseInt(this.route.snapshot.params['id']);
    console.log(this.departamentos);
    console.log(this.index);
    let departamento:Departamento=this.departamentoService.findDepa(this.index)!;
    this.cId= departamento.id;
    this.cNombre = departamento.nombre;
    this.cCodigo = departamento.codigo;
    })
  }


  departamentos:Departamento[] = [];


  backHome() {
    this.router.navigate(['/']);
  }


  update(){
     if(this.cId!=null){
       this.router.navigate(['']);
      const myTabla=new DepartamentoDTO(
        this.cCodigo,
        this.cNombre
      );
      this.departamentoService.updateDepartamentos(this.index, this.cId,myTabla)
    }else {
      this.router.navigate(['']);
    }
  }

}
