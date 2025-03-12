import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../../../Tablas/tablas/src/app/app-routing.module';
import { AppComponent } from '../../../../Tablas/tablas/src/app/app.component';
import { TablaComponent } from '../../../../Tablas/tablas/src/app/tabla/tabla.component';
import { NavBarComponent } from '../../../../Tablas/tablas/src/app/nav-bar/nav-bar.component';
import {FormsModule} from "@angular/forms";
import { ModifyTablaComponent } from '../../../../Tablas/tablas/src/app/modify-tabla/modify-tabla.component';
import {RouterModule, Routes} from "@angular/router";
import {ServiceTablaService} from "../../../../Tablas/tablas/src/app/service-tabla.service";
import {DataService} from "../../../../Tablas/tablas/src/app/data.service";
import {TablaService} from "../../../../Tablas/tablas/src/app/tabla.service";
import {HttpClientModule} from "@angular/common/http";
import { UpdateComponentComponent } from '../../../../Tablas/tablas/src/app/update-component/update-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarComponent } from '../../../../Tablas/tablas/src/app/agregar/agregar.component';

const routes: Routes = [
  {path:'', component: TablaComponent},
  {path:'actualiza/:id', component: UpdateComponentComponent},
  {path:'agrega', component: AgregarComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    NavBarComponent,
    ModifyTablaComponent,
    UpdateComponentComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [ServiceTablaService, TablaService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
