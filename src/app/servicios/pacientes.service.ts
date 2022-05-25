import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Pacientes} from "../modelos/pacientes";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  
  private url = "https://res-api-hospital-jairo.herokuapp.com"
  constructor(private http: HttpClient) {}
 
  newPacientes(doc: Pacientes) {
    const url =`${this.url}/newpaciente`;
    return this.http.post(url, doc);
  }
  getPacientes(){
    const url =`${this.url}/verpaciente`;
    return this.http.get(url);
  }
  getCovid(){
    const url =`${this.url}/vercovid`;
    return this.http.get(url);
  }
  getUrgencias(){
    const url =`${this.url}/verurgencias`;
    return this.http.get(url);
  }
  getbuspaciente(id:number):Observable<any>{
    const url =`${this.url}/buspaciente/${id}`;
    return this.http.get(url);
  }
  updatepaciente(id: number){
    const url =`${this.url}/actualizarpaciente/${id}`;
    return this.http.put(url, id);
  }
  deletepaciente(id: number){
    const url =`${this.url}/eliminarpaciente/${id}`;
    return this.http.delete(url);
  }
}
