import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ServiceTablaService {
  constructor() {
  }

  showMsg(msg:string){
    alert(msg);
  }
}
