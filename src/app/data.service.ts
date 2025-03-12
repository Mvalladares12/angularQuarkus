import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Tabla} from "./tabla.model";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  private apiURL: string = "http://localhost:8080";

  getTablas(){
    return this.http.get(this.apiURL);
  }



  saveTabla(tabla:Tabla[]){
    this.http.post(this.apiURL,tabla).subscribe(
      (response)=>console.log('Se guardó la tabla'+response),
      (error) => console.log(`Error: ${error}`)
    )
  }





  updateTabla(index:number, tabla:Tabla){
    let url= `${this.apiURL}/${index}`;

    this.http.put(url, tabla).subscribe(
      (response) => console.log(`Se ha actualizado la tabla: ${response}`),

      (error) => console.log(`Error: ${error}`)
    )
  }



  deleteTabla(index:number){
    let url= `${this.apiURL}/${index}`;

    this.http.delete(url).subscribe(
      (response) => console.log(`Se ha eliminado la tabla: ${response}`),
      (error) => console.log(`Error: ${error}`)
    )
  }
}
