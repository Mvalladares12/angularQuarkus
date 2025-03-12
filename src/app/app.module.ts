import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServiceTablaService} from './service-tabla.service';
import {TablaService} from './tabla.service';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent,}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideClientHydration(withEventReplay()), ServiceTablaService, TablaService, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
