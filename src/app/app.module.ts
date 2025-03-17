import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServiceDepartamentoService} from './services/service-departamento.service';
import {DepartamentoService} from './services/departamento.service';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'actualiza/:id',component:UpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()), ServiceDepartamentoService, DepartamentoService, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
