import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Pacientes} from "../modelos/pacientes";

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
    private url = "https://proyecto-hospital-jairo.herokuapp.com"
  constructor(private http: HttpClient) {}
  postpacientes(doc: Pacientes) {
    const url=`${this.url}/newpaciente`;
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
  getbuspaciente(){
    const url =`${this.url}/buspaciente/:id`;
    return this.http.get(url);
  }
  updatepaciente(doc: Pacientes){
    const url =`${this.url}/actualizarpaciente/:id`;
    return this.http.put(url, doc);
  }
  deletepaciente(){
    const url =`${this.url}/eliminarpaciente/:id`;
    return this.http.delete(url);
  }
}
