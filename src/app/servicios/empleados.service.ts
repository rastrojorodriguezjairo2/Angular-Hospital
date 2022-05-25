import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Empleados} from "../modelos/empleados";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

   private url = "https://res-api-hospital-jairo.herokuapp.com"
  constructor(private http: HttpClient) {}

  newEmpleado(doc:Empleados) {
    const url =`${this.url}/newempleado`;
    return this.http.post(url, doc);
  }
  getEmpleados(){
    const url =`${this.url}/verempleado`;
    return this.http.get(url);
  }
  getMedicos(){
    const url =`${this.url}/vermedicos`;
    return this.http.get(url);
  }
  getAdministrativos(){
    const url =`${this.url}/veradministrativos`;
    return this.http.get(url);
  }
  getbusempleado(apellido: string): Observable<any>{
    const url =`${this.url}/busemplado/${apellido}`;
    return this.http.get(url);
  }
  updateempleado(id: number){
    const url =`${this.url}/actualizarempleado/${id}`;
    return this.http.put(url, id);
  }
  deleteempleado(id: number){
    const url =`${this.url}/eliminarempleado/${id}`;
    return this.http.delete(url);
  }
}
