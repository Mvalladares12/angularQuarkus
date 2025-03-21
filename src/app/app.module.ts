import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DepartamentoService} from './Departamento/services-departamento/departamento.service';
import {DataDepartamentoService} from './Departamento/services-departamento/data-departamento.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './Departamento/home-departamento/home.component';
import { UpdateComponent } from './Departamento/update-departamento/update.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeMunicipioComponent } from './Municipio/home-municipio/home-municipio.component';
import {MunicipioService} from './Municipio/services-municipio/municipio.service';
import {DataMunicipioService} from './Municipio/services-municipio/data-municipio.service';
import { UpdateMunicipioComponent } from './Municipio/update-municipio/update-municipio.component';
import { HomeDistritoComponent } from './Distrito/home-distrito/home-distrito.component';
import { UpdateDistritoComponent } from './Distrito/update-distrito/update-distrito.component';
import {DistritoService} from './Distrito/services-distrito/distrito.service';
import {DataDistritoService} from './Distrito/services-distrito/data-distrito.service';
import { ErrorComponent } from './error/error.component';
import { provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { providePrimeNG} from 'primeng/config';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import aura from '@primeng/themes/aura'

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'municipio',component:HomeMunicipioComponent},
  {path:'distrito',component:HomeDistritoComponent},
  {path:'actualiza/:id',component:UpdateComponent},
  {path:'actualizaMuni/:id',component:UpdateMunicipioComponent},
  {path:'actualizaDistrito/:id',component:UpdateDistritoComponent},
  {path:'**',component:ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateComponent,
    HomeMunicipioComponent,
    UpdateMunicipioComponent,
    HomeDistritoComponent,
    UpdateDistritoComponent,
    ErrorComponent
  ],
  imports: [
    //UpdateComponent,
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    ButtonModule,
    TableModule
  ],
  providers: [DistritoService, DataDistritoService, MunicipioService, DataMunicipioService, DepartamentoService, DataDepartamentoService, providePrimeNG({theme:{preset:aura}}), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
