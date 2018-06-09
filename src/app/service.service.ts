import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: Http){

  }

  getCursos() {
   	// return this.http.get("//viacep.com.br/ws/34002-251/json")
  		//    .map(dados => dados.json())	
  		//    .subscribe(dados => console.log(dados));
  		return ["A1","A2","A3"];
  }
}
