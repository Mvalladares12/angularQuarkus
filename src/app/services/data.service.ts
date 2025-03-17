import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Departamento} from "../models/departamento.model";


@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  private apiURL: string = "http://localhost:8080/departamento";

  getDepartamentos(){
    return this.http.get(this.apiURL);
  }


  getTabla(id:number){
    return this.http.get(this.apiURL+"/"+id);
  }


  saveDepartamentos(departamento:Departamento[]){
    this.http.post(this.apiURL,departamento).subscribe(
      (response)=>console.log('Se guardó el departamento'+response),
      (error) => console.error(`Error: ${error}`)
    )
  }


  updateDepartamentos(index:number, departamento:Departamento){
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
}
