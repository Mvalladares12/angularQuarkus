import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ServiceDepartamentoService {
  constructor() {
  }

  showMsg(msg:string){
    alert(msg);
  }
}
