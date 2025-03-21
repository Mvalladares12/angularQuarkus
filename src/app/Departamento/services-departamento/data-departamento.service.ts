import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Departamento} from "../models-departamento/departamento.model";
import { DepartamentoDTO} from '../models-departamento/departamentoDTO.model';
import {Observable} from 'rxjs';
import {Depa} from '../../Municipio/models-municipio/municipio.model';


@Injectable()
export class DataDepartamentoService {
  constructor(private http: HttpClient) { }

  private apiURL: string = "http://localhost:8080/departamento";
  private apiDepa: string = "http://localhost:8080/departamento";

  getDepartamentos(){
    return this.http.get(this.apiURL);
  }

  getDepa():Observable<Depa[]>{
    return this.http.get<Depa[]>(this.apiDepa);
  }


  saveDepartamentos(departamento:DepartamentoDTO){
    //const departamentoObj={departamento}
    this.http.post(this.apiURL,departamento).subscribe(
      (response)=>console.log('Se guardó el departamento'+response),
      (error) => console.error(`Error: ${error}`)
    )
  }


  updateDepartamentos(index:number, departamento:DepartamentoDTO){
    let url= `${this.apiURL}/${index}`;

    this.http.put(url, departamento).subscribe(
      (response) => console.log(`Se ha actualizado el departamento: ${response}`),

      (error) => console.log(`Error: ${error}`)
    )
  }



  deleteDepartamentos(index:number){
    let url= `${this.apiURL}/${index}`;

    this.http.delete(url).subscribe(
      (response) => console.log(`Se ha eliminado el departamento: ${response}`),
      (error) => console.log(`Error: ${error}`)
    )
  }

  getReport(){
    return this.http.get(this.apiDepa+'/pdf');
  }
}
