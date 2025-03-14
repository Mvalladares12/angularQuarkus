import {Component, Input, OnInit} from '@angular/core';
import {Tabla} from '../tabla.model';
import {ServiceTablaService} from '../service-tabla.service';
import {TablaService} from '../tabla.service';
import {Router} from '@angular/router';



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
    this.tablaService.deleteTabla(i);
  }

  public handleDismiss(): void {}

  constructor(private myService: ServiceTablaService, private tablaService: TablaService, private router:Router) {
  }

  ngOnInit(): void {

    this.tablaService.loadTabla().subscribe(myTabla => {
      console.log(myTabla);
      this.tablas=Object.values(myTabla);
      this.tablaService.setTabla(this.tablas);
    })
  }

  tablas: Tabla[] = [];

  registTabla(){
    let myTabla=new Tabla(
      this?.cId,
      this.cCodigo,
      this.cNombre
    );
    this.tablaService.addTabla(myTabla);
  }


  cId:number=0;
  cCodigo:number=0;
  cNombre:string='';
}
