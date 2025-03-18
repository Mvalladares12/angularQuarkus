import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MunicipioDTO} from '../models-municipio/municipioDTO.model';
import {Depa, Municipio} from '../models-municipio/municipio.model';

@Injectable()
export class DataMunicipioService {

  constructor(private http: HttpClient) { }

  private apiURL: string = "http://localhost:8080/municipio";

  getMunicipios(){
    return this.http.get(this.apiURL);
  }


  saveMunicipios(municipio:MunicipioDTO){
    this.http.post(this.apiURL,municipio).subscribe(
      (response)=>console.log('Se guardó el municipio'+response),
      (error) => console.error(`Error: ${error}`)
    )
  }


  updateMunicipios(index:number, municipio:Municipio){
    let url= `${this.apiURL}/${index}`;

    this.http.put(url, municipio).subscribe(
      (response) => console.log(`Se ha actualizado el municipio: ${response}`),

      (error) => console.log(`Error: ${error}`)
    )
  }


  deleteMunicipios(index:number){
    let url= `${this.apiURL}/${index}`;

    this.http.delete(url).subscribe(
      (response) => console.log(`Se ha eliminado el municipio: ${response}`),
      (error) => console.log(`Error: ${error}`)
    )
  }
}
