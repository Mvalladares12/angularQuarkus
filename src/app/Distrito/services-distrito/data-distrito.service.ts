import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Distrito} from '../models-distrito/distrito.model';
import {DistritoDTO} from '../models-distrito/distritoDTO.model';

@Injectable()
export class DataDistritoService {

  constructor(private http: HttpClient) { }

  private apiURL: string = "http://localhost:8080/distrito";

  getDistritos(){
    return this.http.get(this.apiURL);
  }


  saveDistritos(distrito:DistritoDTO){
    this.http.post(this.apiURL,distrito).subscribe(
      (response)=>console.log('Se guardó el distrito'+response),
      (error) => console.error(`Error: ${error}`)
    )
  }


  updateDistritos(index:number, distrito:Distrito){
    let url= `${this.apiURL}/${index}`;

    this.http.put(url, distrito).subscribe(
      (response) => console.log(`Se ha actualizado el distrito: ${response}`),

      (error) => console.log(`Error: ${error}`)
    )
  }


  deleteDistritos(index:number){
    let url= `${this.apiURL}/${index}`;

    this.http.delete(url).subscribe(
      (response) => console.log(`Se ha eliminado el municipio: ${response}`),
      (error) => console.log(`Error: ${error}`)
    )
  }
}
