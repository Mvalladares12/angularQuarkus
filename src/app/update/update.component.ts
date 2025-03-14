import {Component, OnInit} from '@angular/core';
import {TablaService} from '../tabla.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceTablaService} from '../service-tabla.service';
import {Tabla} from '../tabla.model';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  constructor(public tablaService: TablaService,
              private router: Router,
              private route: ActivatedRoute,
              private myService: ServiceTablaService) { }



  tablas:Tabla[] = [];

  ngOnInit(): void {
    //this.action = parseInt(this.route.snapshot.queryParams['action']);
    this.tablas=this.tablaService.tablas;
    this.index=parseInt(this.route.snapshot.params['id']);
    let tabla:Tabla=this.tablaService.findTabla(this.index);
    //console.log('indice  '+this.index);
    this.cId = tabla.id;
    this.cNombre = tabla.nombre;
    this.cCodigo = tabla.codigo;

  }



  update(){
    if(this.action==1){
      this.router.navigate(['']);
      let myTabla=new Tabla(
        this.cId,
        this.cCodigo,
        this.cNombre
      );
      this.tablaService.updateTabla(this.index,myTabla);
    }else {
      this.router.navigate(['']);
      this.tablaService.deleteTabla(this.index);
    }
  }

  backHome() {
    this.router.navigate(['']);
  }

  cId:number=0;
  cNombre: string='';
  cCodigo: number=0;
  index: number = 0;
  action:number;
}
